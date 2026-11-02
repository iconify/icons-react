import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k71_yo_lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k71_yo_lj"/>`,
		"fallback": "mingcute:bedside-table-2-fill",
	});
}

export default Component;
