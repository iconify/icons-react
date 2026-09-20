import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqvh32bdj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqvh32bdj"/>`,
		"fallback": "la:atlas",
	});
}

export default Component;
