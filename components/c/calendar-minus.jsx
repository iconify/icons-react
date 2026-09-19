import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn_3ohb_r.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn_3ohb_r"/>`,
		"fallback": "fa6-solid:calendar-minus",
	});
}

export default Component;
