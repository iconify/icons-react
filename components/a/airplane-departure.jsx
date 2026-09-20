import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcn1wxbzq.css';
import '../../css/c/c69-kvbqj.css';
import '../../css/z/zmabgsdyi.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/j/jre3zve1q.css';
import '../../css/x/xz29tw2wc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcn1wxbzq"/><path class="c69-kvbqj"/><path class="zmabgsdyi"/><g class="ij2x_72vy"><path class="jre3zve1q"/><path class="xz29tw2wc"/></g>`,
		"fallback": "openmoji:airplane-departure",
	});
}

export default Component;
