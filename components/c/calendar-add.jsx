import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp12kbbyo.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp12kbbyo"/>`,
		"fallback": "system-uicons:calendar-add",
	});
}

export default Component;
