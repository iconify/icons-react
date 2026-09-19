import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8hhtkv4v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8hhtkv4v"/>`,
		"fallback": "carbon:ibm-cloud-security",
	});
}

export default Component;
