import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc5crhb4x.css';
import '../../css/y/yno1x_b-o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc5crhb4x"/><path class="yno1x_b-o"/>`,
		"fallback": "carbon:ibm-cloud-hyper-protect-vs",
	});
}

export default Component;
