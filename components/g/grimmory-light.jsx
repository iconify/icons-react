import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb9i-5hiz.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/uxbmyhwdw.css';
import '../../css/t/thecmsb_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG8eStKbNb" x1="256" x2="256" y1="514" y2="28.262" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="tb9i-5hiz"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVG8eStKbNb)" class="uxbmyhwdw"/><path class="thecmsb_s"/>`,
		"fallback": "selfhst:grimmory-light",
	});
}

export default Component;
