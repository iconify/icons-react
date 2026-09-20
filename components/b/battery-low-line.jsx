import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hao-mcclc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hao-mcclc"/>`,
		"fallback": "majesticons:battery-low-line",
	});
}

export default Component;
