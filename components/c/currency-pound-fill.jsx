import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp77ojb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp77ojb7m"/>`,
		"fallback": "mingcute:currency-pound-fill",
	});
}

export default Component;
