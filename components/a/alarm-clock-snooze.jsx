import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ectql4bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ectql4bth"/>`,
		"fallback": "mdi:alarm-clock-snooze",
	});
}

export default Component;
