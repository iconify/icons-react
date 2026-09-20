import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/d/d-llkv2cb.css';
import '../../css/k/k9xc39bgw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGX1sCedyn" x1="0" x2="512" y1="0" y2="512" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="d-llkv2cb"/></linearGradient><path fill="url(#SVGX1sCedyn)" class="k9xc39bgw"/>`,
		"fallback": "selfhst:dispatch-tasks-light",
	});
}

export default Component;
