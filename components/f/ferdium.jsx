import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lntkaob4s.css';
import '../../css/p/pc_b7vbqs.css';
import '../../css/b/b78_k0b_z.css';
import '../../css/i/icywm0byl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGaf9p9dBl" x1="1756.972" x2="5331.565" y1="7398.358" y2="3567.638" gradientTransform="translate(-89.428 -278.926)scale(.09752)" gradientUnits="userSpaceOnUse"><stop offset="0" class="lntkaob4s"/><stop offset="1" class="pc_b7vbqs"/></linearGradient><circle fill="url(#SVGaf9p9dBl)" class="b78_k0b_z"/><path class="icywm0byl"/>`,
		"fallback": "selfhst:ferdium",
	});
}

export default Component;
