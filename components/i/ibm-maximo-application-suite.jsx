import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipb3veb3j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipb3veb3j"/>`,
		"fallback": "carbon:ibm-maximo-application-suite",
	});
}

export default Component;
