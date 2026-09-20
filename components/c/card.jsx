import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0tn9tb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0tn9tb-v"/>`,
		"fallback": "mdi:card",
	});
}

export default Component;
