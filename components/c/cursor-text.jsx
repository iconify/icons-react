import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdo-7rb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdo-7rb_v"/>`,
		"fallback": "hugeicons:cursor-text",
	});
}

export default Component;
