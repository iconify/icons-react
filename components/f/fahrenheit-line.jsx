import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw0fkmb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw0fkmb4e"/>`,
		"fallback": "mingcute:fahrenheit-line",
	});
}

export default Component;
