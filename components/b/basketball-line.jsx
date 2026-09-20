import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtj1kerrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtj1kerrb"/>`,
		"fallback": "mingcute:basketball-line",
	});
}

export default Component;
