import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/s/s0urbhscb.css';
import '../../css/c/cppumpo2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGtv1T6NMg" x1="71.736" x2="440.264" y1="71.736" y2="440.264" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="s0urbhscb"/></linearGradient><path fill="url(#SVGtv1T6NMg)" class="cppumpo2k"/>`,
		"fallback": "selfhst:foldergram-light",
	});
}

export default Component;
