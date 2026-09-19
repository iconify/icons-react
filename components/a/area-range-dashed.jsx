import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-hw2vnyz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-hw2vnyz"/>`,
		"fallback": "carbon:area-range-dashed",
	});
}

export default Component;
