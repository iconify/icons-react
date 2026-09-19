import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrky55rmr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrky55rmr"/>`,
		"fallback": "carbon:ibm-planning-analytics",
	});
}

export default Component;
