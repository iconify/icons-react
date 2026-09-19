import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pktnifbwo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pktnifbwo"/>`,
		"fallback": "glyphs:dollar-sign-bold",
	});
}

export default Component;
