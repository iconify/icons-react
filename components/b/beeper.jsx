import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs666di4s.css';
import '../../css/x/xaigl9buy.css';
import '../../css/k/k0hbd4wrx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGeBafsd8k" x1="475.2" x2="33.6" y1="392.2" y2="137.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="gs666di4s"/><stop offset="1" class="xaigl9buy"/></linearGradient><path fill="url(#SVGeBafsd8k)" class="k0hbd4wrx"/>`,
		"fallback": "selfhst:beeper",
	});
}

export default Component;
