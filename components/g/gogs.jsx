import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu6rrebon.css';
import '../../css/z/z3oeu3bfs.css';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t2gsm7bzb.css';
import '../../css/b/b83fs5g2u.css';
import '../../css/k/kd6x583_u.css';

const viewBox = {"width":420,"height":420,"left":45,"top":38};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGCrK14dbm" cx="39.607%" cy="0%" r="103.741%" fx="39.607%" fy="0%" gradientTransform="matrix(0 .96394 -1 0 .396 -.382)"><stop offset="0%" class="pu6rrebon"/><stop offset="100%" class="z3oeu3bfs"/></radialGradient><filter id="SVG5Bi9HNuX" width="117%" height="116.4%" x="-8.5%" y="-8.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="10"/></filter></defs><g class="bi12bsetm"><path fill="url(#SVGCrK14dbm)" filter="url(#SVG5Bi9HNuX)" class="t2gsm7bzb"/><path fill="url(#SVGCrK14dbm)" class="b83fs5g2u"/><path class="kd6x583_u"/></g>`,
		"fallback": "thesvg-color:gogs",
	});
}

export default Component;
