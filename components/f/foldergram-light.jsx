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
		"content": `<linearGradient id="SVGbSVJPS2c" x1="71.7" x2="440.3" y1="71.7" y2="440.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="s0urbhscb"/></linearGradient><path fill="url(#SVGbSVJPS2c)" class="cppumpo2k"/>`,
		"fallback": "selfhst:foldergram-light",
	});
}

export default Component;
