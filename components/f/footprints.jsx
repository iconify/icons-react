import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/jekpwq_9y.css';
import '../../css/l/l0yga2sgw.css';
import '../../css/n/noizbfb5q.css';
import '../../css/j/joxhn2soq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwWSIxeqZ" x1="9.01" x2="15.01" y1="1.51" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGwWSIxeqZ)" class="jekpwq_9y"/><path class="l0yga2sgw wm-shine"/><path class="noizbfb5q wm-shine"/><path class="joxhn2soq wm-shine"/></g>`,
		"fallback": "withicons-utsav:footprints",
	});
}

export default Component;
