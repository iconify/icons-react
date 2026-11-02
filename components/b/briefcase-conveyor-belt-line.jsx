import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qas86vq5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qas86vq5o"/>`,
		"fallback": "mingcute:briefcase-conveyor-belt-line",
	});
}

export default Component;
