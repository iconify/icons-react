import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj5e91bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj5e91bju"/>`,
		"fallback": "mdi:arrow-expand-vertical",
	});
}

export default Component;
