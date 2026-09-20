import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-c80ro0i.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/p/p8243xb9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGdPWX3cZz" x1="256" x2="256" y1="512" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" class="f-c80ro0i"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGdPWX3cZz)" class="p8243xb9z"/>`,
		"fallback": "selfhst:fastgpt-light",
	});
}

export default Component;
