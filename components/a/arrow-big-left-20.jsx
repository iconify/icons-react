import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy0m3ysyh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy0m3ysyh"/>`,
		"fallback": "energy-icons:arrow-big-left-20",
	});
}

export default Component;
