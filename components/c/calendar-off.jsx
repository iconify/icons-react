import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk7l_pq-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk7l_pq-v"/>`,
		"fallback": "noviair-light:calendar-off",
	});
}

export default Component;
