import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmukxqtqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmukxqtqb"/>`,
		"fallback": "mingcute:alarm-clock-minus-fill",
	});
}

export default Component;
