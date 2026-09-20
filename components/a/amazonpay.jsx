import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vicm16mkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vicm16mkl"/>`,
		"fallback": "simple-icons:amazonpay",
	});
}

export default Component;
