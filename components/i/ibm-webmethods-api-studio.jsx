import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt460bckv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt460bckv"/>`,
		"fallback": "carbon:ibm-webmethods-api-studio",
	});
}

export default Component;
