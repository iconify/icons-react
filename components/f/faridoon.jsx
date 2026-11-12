import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfwdcnlyh.css';
import '../../css/u/ux0hlqb8q.css';
import '../../css/u/u_1f-feup.css';
import '../../css/s/sxf62sb0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG6KT4ze1e" x1="256" x2="256" y1="-31" y2="462.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="dfwdcnlyh"/><stop offset="1" class="ux0hlqb8q"/></linearGradient><path fill="url(#SVG6KT4ze1e)" class="u_1f-feup"/><path class="sxf62sb0r"/>`,
		"fallback": "selfhst:faridoon",
	});
}

export default Component;
