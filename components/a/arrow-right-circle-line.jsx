import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6lk72b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6lk72b9i"/>`,
		"fallback": "ri:arrow-right-circle-line",
	});
}

export default Component;
