import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtr3e-b0i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtr3e-b0i"/>`,
		"fallback": "cib:centos",
	});
}

export default Component;
