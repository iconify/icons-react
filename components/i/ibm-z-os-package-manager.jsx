import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx2yo906k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx2yo906k"/>`,
		"fallback": "carbon:ibm-z-os-package-manager",
	});
}

export default Component;
