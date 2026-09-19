import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sssou3bkf.css';
import '../../css/y/ybhu5ybua.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sssou3bkf"/><path class="ybhu5ybua"/>`,
		"fallback": "carbon:ibm-cloud-pal",
	});
}

export default Component;
