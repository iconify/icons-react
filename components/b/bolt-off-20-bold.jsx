import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_dsj84zh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_dsj84zh"/>`,
		"fallback": "energy-icons:bolt-off-20-bold",
	});
}

export default Component;
