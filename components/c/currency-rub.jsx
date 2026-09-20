import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxheb3b1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxheb3b1o"/>`,
		"fallback": "mdi-light:currency-rub",
	});
}

export default Component;
