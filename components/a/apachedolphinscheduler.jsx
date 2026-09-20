import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no4anzb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no4anzb7q"/>`,
		"fallback": "simple-icons:apachedolphinscheduler",
	});
}

export default Component;
