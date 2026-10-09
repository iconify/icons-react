import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1_9j_biz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1_9j_biz"/>`,
		"fallback": "energy-icons:arrow-big-right-48-bold",
	});
}

export default Component;
