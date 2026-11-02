import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5oigob1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5oigob1j"/>`,
		"fallback": "mingcute:arrow-left-down-circle-fill",
	});
}

export default Component;
