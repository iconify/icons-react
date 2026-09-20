import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7c3_8e1u.css';
import '../../css/e/ech0yp8ke.css';
import '../../css/p/p0wu5vbqe.css';
import '../../css/k/k5eysoc0b.css';
import '../../css/n/n014y3b2z.css';
import '../../css/v/vkd-4ibad.css';
import '../../css/r/rjtyn3x4x.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/iwntbe5-h.css';
import '../../css/k/kbajchbsb.css';
import '../../css/z/zy82azmcd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7c3_8e1u"/><path class="ech0yp8ke"/><path class="p0wu5vbqe"/><path class="k5eysoc0b"/><path class="n014y3b2z"/><path class="vkd-4ibad"/><path class="rjtyn3x4x"/><g class="ij2x_72vy"><path class="iwntbe5-h"/><path class="kbajchbsb"/><path class="zy82azmcd"/></g>`,
		"fallback": "openmoji:envelope",
	});
}

export default Component;
