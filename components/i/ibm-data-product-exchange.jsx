import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bex8n1b-w.css';
import '../../css/h/hsrzeq-ig.css';
import '../../css/g/g_362tbxm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bex8n1b-w"/><path class="hsrzeq-ig"/><path class="g_362tbxm"/>`,
		"fallback": "carbon:ibm-data-product-exchange",
	});
}

export default Component;
