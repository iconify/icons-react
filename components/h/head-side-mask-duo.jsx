import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c772vbbis.css';
import '../../css/l/l6j9zy5iy.css';
import '../../css/p/p2-tfdcvk.css';
import '../../css/g/geakzybqh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c772vbbis"/><path class="l6j9zy5iy"/><path class="p2-tfdcvk"/><path class="geakzybqh"/></g>`,
		"fallback": "glyphs:head-side-mask-duo",
	});
}

export default Component;
