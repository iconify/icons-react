import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzf-sabyb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzf-sabyb"/>`,
		"fallback": "carbon:ibm-webmethods-managed-file-transfer",
	});
}

export default Component;
