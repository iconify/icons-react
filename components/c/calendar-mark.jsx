import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoo7dmbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eoo7dmbpt"/>`,
		"fallback": "reicon:calendar-mark",
	});
}

export default Component;
