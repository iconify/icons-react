import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoshd2brl.css';
import '../../css/e/eww6_fb3u.css';
import '../../css/e/e3vxdac3m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGU8b2Jemq" x1="736.964" x2="1738.505" y1="-257.356" y2="-257.356" gradientTransform="matrix(.4945 0 0 -.5112 -356.02 124.436)" gradientUnits="userSpaceOnUse"><stop offset="0" class="eoshd2brl"/><stop offset="1" class="eww6_fb3u"/></linearGradient><path fill="url(#SVGU8b2Jemq)" class="e3vxdac3m"/>`,
		"fallback": "selfhst:budget-board",
	});
}

export default Component;
