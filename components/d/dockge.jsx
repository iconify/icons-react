import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mylrgib3j.css';
import '../../css/t/tr0fwwk_h.css';
import '../../css/m/mne0scb3a.css';
import '../../css/n/nienw3x4z.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGPBcOfeIO" x1="-68.923" x2="140.067" y1="744.781" y2="944.831" gradientTransform="translate(401.442 -308.253)scale(.9111)" gradientUnits="userSpaceOnUse"><stop offset="0" class="mylrgib3j"/><stop offset="1" class="tr0fwwk_h"/></linearGradient><path fill="url(#SVGPBcOfeIO)" class="mne0scb3a"/><path class="nienw3x4z"/>`,
		"fallback": "selfhst:dockge",
	});
}

export default Component;
