import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkira4mse.css';
import '../../css/d/d8zayxbdq.css';
import '../../css/q/q9gdl6bex.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkira4mse"/><path class="d8zayxbdq"/><path class="q9gdl6bex"/>`,
		"fallback": "energy-icons:external-link-20-bold",
	});
}

export default Component;
