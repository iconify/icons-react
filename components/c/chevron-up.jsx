import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qidi1vbhh.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qidi1vbhh"/>`,
		"fallback": "lineicons:chevron-up",
	});
}

export default Component;
