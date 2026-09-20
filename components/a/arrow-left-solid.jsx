import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwtw7fjrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwtw7fjrr"/>`,
		"fallback": "pixel:arrow-left-solid",
	});
}

export default Component;
