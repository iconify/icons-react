import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f13jpybpj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f13jpybpj"/>`,
		"fallback": "glyphs:f",
	});
}

export default Component;
