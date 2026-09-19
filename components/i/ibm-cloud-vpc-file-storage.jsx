import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4_pv09me.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4_pv09me"/>`,
		"fallback": "carbon:ibm-cloud-vpc-file-storage",
	});
}

export default Component;
