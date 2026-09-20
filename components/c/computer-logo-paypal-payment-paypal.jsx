import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h1c9-902q.css';
import '../../css/k/kwgjfrbex.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h1c9-902q"/><path class="kwgjfrbex"/></g>`,
		"fallback": "streamline:computer-logo-paypal-payment-paypal",
	});
}

export default Component;
