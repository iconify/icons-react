import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px8l8sr1r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px8l8sr1r"/>`,
		"fallback": "carbon:ibm-engineering-systems-design-rhapsody-model-manager",
	});
}

export default Component;
