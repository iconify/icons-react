import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7w3pab8i.css';
import '../../css/z/zb3612vqu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d7w3pab8i"/><path class="zb3612vqu"/></g>`,
		"fallback": "glyphs:eye-lashes-bold",
	});
}

export default Component;
