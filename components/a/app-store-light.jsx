import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-c80ro0i.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/udnwifidc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGb01JPbTh" x1="256" x2="256" y1="-.75" y2="511.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="f-c80ro0i"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGb01JPbTh)" class="udnwifidc"/>`,
		"fallback": "selfhst:app-store-light",
	});
}

export default Component;
