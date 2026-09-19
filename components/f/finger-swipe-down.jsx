import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qozmdccui.css';
import '../../css/z/zvp6zsbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qozmdccui"/><path class="zvp6zsbrb"/>`,
		"fallback": "boxicons:finger-swipe-down",
	});
}

export default Component;
