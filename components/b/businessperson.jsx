import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a29kp0bqf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a29kp0bqf"/>`,
		"fallback": "dashicons:businessperson",
	});
}

export default Component;
