import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlzn5acfz.css';
import '../../css/k/k4ib_nbps.css';
import '../../css/a/a50yp5blw.css';
import '../../css/q/q7o47tals.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGKpfBmbbD" x1="-17.537" x2="518.844" y1="167.598" y2="311.321" gradientUnits="userSpaceOnUse"><stop offset="0" class="wlzn5acfz"/><stop offset=".893" class="k4ib_nbps"/><stop offset="1" class="a50yp5blw"/></linearGradient><path fill="url(#SVGKpfBmbbD)" class="q7o47tals"/>`,
		"fallback": "selfhst:crosswatch",
	});
}

export default Component;
