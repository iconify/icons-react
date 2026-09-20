import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qubcu9bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qubcu9bit"/>`,
		"fallback": "mi:arrow-up",
	});
}

export default Component;
