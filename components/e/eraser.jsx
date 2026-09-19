import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-vex1-ye.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-vex1-ye"/>`,
		"fallback": "fa6-solid:eraser",
	});
}

export default Component;
