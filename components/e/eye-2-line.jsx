import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7g8utbwr.css';
import '../../css/v/v8v4y7b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7g8utbwr"/><path class="v8v4y7b1z"/>`,
		"fallback": "mingcute:eye-2-line",
	});
}

export default Component;
