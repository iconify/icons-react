import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ainr45o9r.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ainr45o9r"/>`,
		"fallback": "memory:calendar-month",
	});
}

export default Component;
