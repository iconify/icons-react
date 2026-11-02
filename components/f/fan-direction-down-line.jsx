import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbq8t_bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbq8t_bqv"/>`,
		"fallback": "mingcute:fan-direction-down-line",
	});
}

export default Component;
