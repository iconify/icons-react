import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1i-prnbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1i-prnbk"/>`,
		"fallback": "mingcute:flower-4-fill",
	});
}

export default Component;
