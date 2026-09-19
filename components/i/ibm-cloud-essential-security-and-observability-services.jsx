import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxo0d_b0f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxo0d_b0f"/>`,
		"fallback": "carbon:ibm-cloud-essential-security-and-observability-services",
	});
}

export default Component;
