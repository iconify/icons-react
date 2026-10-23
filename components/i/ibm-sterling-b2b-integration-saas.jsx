import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozg9a2b_v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozg9a2b_v"/>`,
		"fallback": "carbon:ibm-sterling-b2b-integration-saas",
	});
}

export default Component;
