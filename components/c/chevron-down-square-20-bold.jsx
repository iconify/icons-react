import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fec4cjbkq.css';
import '../../css/q/qcaq4pnjj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fec4cjbkq"/><path class="qcaq4pnjj"/>`,
		"fallback": "energy-icons:chevron-down-square-20-bold",
	});
}

export default Component;
