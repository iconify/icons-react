import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vicy7ngor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vicy7ngor"/>`,
		"fallback": "ri:drinks-line",
	});
}

export default Component;
