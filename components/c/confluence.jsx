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
		"content": `<linearGradient id="SVGLI7dnc5v" x1="486.5" x2="166.1" y1="533.4" y2="349.2" gradientUnits="userSpaceOnUse"><stop offset=".18" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><path fill="url(#SVGLI7dnc5v)" class="npf5apb2o"/><linearGradient id="SVGynWqgdnX" x1="25.4" x2="345.9" y1="-20.9" y2="163.3" gradientUnits="userSpaceOnUse"><stop offset=".18" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><path fill="url(#SVGynWqgdnX)" class="uzp-f16cb"/>`,
		"fallback": "selfhst:confluence",
	});
}

export default Component;
