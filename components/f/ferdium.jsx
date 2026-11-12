import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lntkaob4s.css';
import '../../css/p/pc_b7vbqs.css';
import '../../css/i/iycln-b8i.css';
import '../../css/i/icywm0byl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGn2j6wbdb" x1="81.9" x2="430.5" y1="442.6" y2="69" gradientUnits="userSpaceOnUse"><stop offset="0" class="lntkaob4s"/><stop offset="1" class="pc_b7vbqs"/></linearGradient><circle fill="url(#SVGn2j6wbdb)" class="iycln-b8i"/><path class="icywm0byl"/>`,
		"fallback": "selfhst:ferdium",
	});
}

export default Component;
