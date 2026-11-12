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
		"content": `<linearGradient id="SVGkjbDZbNI" x1="75" x2="437" y1="75" y2="437" gradientUnits="userSpaceOnUse"><stop offset="0" class="ud9mscb4f"/><stop offset="1" class="wrc732bfl"/></linearGradient><circle fill="url(#SVGkjbDZbNI)" class="iycln-b8i"/>`,
		"fallback": "selfhst:ackee",
	});
}

export default Component;
