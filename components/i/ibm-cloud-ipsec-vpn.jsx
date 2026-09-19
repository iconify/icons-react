import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz405v0af.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz405v0af"/>`,
		"fallback": "carbon:ibm-cloud-ipsec-vpn",
	});
}

export default Component;
