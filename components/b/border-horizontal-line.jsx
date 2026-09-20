import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5-fr6b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5-fr6b_l"/>`,
		"fallback": "mingcute:border-horizontal-line",
	});
}

export default Component;
