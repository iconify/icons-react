import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emmfvjufh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emmfvjufh"/>`,
		"fallback": "ri:calendar-view",
	});
}

export default Component;
