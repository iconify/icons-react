import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aocp3_gja.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aocp3_gja"/>`,
		"fallback": "carbon:ibm-webmethods-api-gateway",
	});
}

export default Component;
