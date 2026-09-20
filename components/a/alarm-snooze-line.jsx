import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5taks1bd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5taks1bd"/>`,
		"fallback": "ri:alarm-snooze-line",
	});
}

export default Component;
