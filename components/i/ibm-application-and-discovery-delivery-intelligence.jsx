import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv0n9ebsm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv0n9ebsm"/>`,
		"fallback": "carbon:ibm-application-and-discovery-delivery-intelligence",
	});
}

export default Component;
