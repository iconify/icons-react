import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neyc37j5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neyc37j5m"/>`,
		"fallback": "heroicons-outline:arrow-down",
	});
}

export default Component;
