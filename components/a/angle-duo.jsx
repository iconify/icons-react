import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n14n-3bio.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n14n-3bio"/>`,
		"fallback": "glyphs:angle-duo",
	});
}

export default Component;
