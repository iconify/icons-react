import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7eeu27cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7eeu27cj"/>`,
		"fallback": "ri:earth-line",
	});
}

export default Component;
