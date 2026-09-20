import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud9mscb4f.css';
import '../../css/w/wrc732bfl.css';
import '../../css/i/iycln-b8i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGSRwzPbeE" x1="74.981" x2="437.019" y1="74.981" y2="437.019" gradientUnits="userSpaceOnUse"><stop offset="0" class="ud9mscb4f"/><stop offset="1" class="wrc732bfl"/></linearGradient><circle fill="url(#SVGSRwzPbeE)" class="iycln-b8i"/>`,
		"fallback": "selfhst:ackee",
	});
}

export default Component;
