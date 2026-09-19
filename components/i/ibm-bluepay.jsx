import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eddq2pbon.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eddq2pbon"/>`,
		"fallback": "carbon:ibm-bluepay",
	});
}

export default Component;
