import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcraqe0wj.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcraqe0wj"/>`,
		"fallback": "fa6-solid:cloud-moon",
	});
}

export default Component;
