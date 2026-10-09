import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtnzw9bua.css';
import '../../css/x/x-s0729al.css';
import '../../css/l/lqfq8cbct.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtnzw9bua"/><path class="x-s0729al"/><path class="lqfq8cbct"/>`,
		"fallback": "energy-icons:elderly-48-bold",
	});
}

export default Component;
