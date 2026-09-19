import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrbt_q4og.css';
import '../../css/p/pt8e8sjhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrbt_q4og"/><path class="pt8e8sjhj"/>`,
		"fallback": "eva:backspace-outline",
	});
}

export default Component;
