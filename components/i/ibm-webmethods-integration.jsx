import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkkun1bwn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkkun1bwn"/>`,
		"fallback": "carbon:ibm-webmethods-integration",
	});
}

export default Component;
