import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7wzu6vmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7wzu6vmk"/>`,
		"fallback": "bx:bxs-calendar-x",
	});
}

export default Component;
