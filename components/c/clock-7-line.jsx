import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxlmmx9sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxlmmx9sx"/>`,
		"fallback": "mingcute:clock-7-line",
	});
}

export default Component;
