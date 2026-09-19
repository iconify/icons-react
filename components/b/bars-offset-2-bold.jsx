import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d98p024yo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d98p024yo"/>`,
		"fallback": "glyphs:bars-offset-2-bold",
	});
}

export default Component;
