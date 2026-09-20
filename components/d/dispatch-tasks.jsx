import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz0dcbb8n.css';
import '../../css/k/ki_6arbqi.css';
import '../../css/c/cg1ea_bld.css';
import '../../css/e/ef5h7htza.css';
import '../../css/w/w9_2rb0bj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGYwNZLzNi" x1="-690.518" x2="-681.375" y1="792.018" y2="782.875" gradientTransform="matrix(56 0 0 -56 38669 44353)" gradientUnits="userSpaceOnUse"><stop offset="0" class="oz0dcbb8n"/><stop offset=".55" class="ki_6arbqi"/><stop offset="1" class="cg1ea_bld"/></linearGradient><path fill="url(#SVGYwNZLzNi)" class="ef5h7htza"/><path class="w9_2rb0bj"/>`,
		"fallback": "selfhst:dispatch-tasks",
	});
}

export default Component;
