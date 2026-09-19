import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf56pcb8v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf56pcb8v"/>`,
		"fallback": "fa7-solid:democrat",
	});
}

export default Component;
