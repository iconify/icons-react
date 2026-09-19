import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvi-a0bav.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvi-a0bav"/>`,
		"fallback": "carbon:ibm-secure-infrastructure-on-vpc-for-regulated-industries",
	});
}

export default Component;
