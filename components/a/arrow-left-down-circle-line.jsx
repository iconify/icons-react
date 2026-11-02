import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abmc4lbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abmc4lbzt"/>`,
		"fallback": "mingcute:arrow-left-down-circle-line",
	});
}

export default Component;
