import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sav6x4bmf.css';
import '../../css/g/g_gp7lgqe.css';
import '../../css/n/npf5apb2o.css';
import '../../css/u/uzp-f16cb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGbUPENedW" x1="486.503" x2="166.097" y1="811.181" y2="627.068" gradientTransform="translate(0 -277.83)" gradientUnits="userSpaceOnUse"><stop offset=".18" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><path fill="url(#SVGbUPENedW)" class="npf5apb2o"/><linearGradient id="SVGh7lNCdDZ" x1="61.135" x2="-259.353" y1="-1873.821" y2="-2058.016" gradientTransform="rotate(180 43.26 -947.355)" gradientUnits="userSpaceOnUse"><stop offset=".18" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><path fill="url(#SVGh7lNCdDZ)" class="uzp-f16cb"/>`,
		"fallback": "selfhst:confluence",
	});
}

export default Component;
