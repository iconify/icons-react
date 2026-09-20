import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk5j5hbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk5j5hbpr"/>`,
		"fallback": "keyline-icons:calculator-sharp-fill",
	});
}

export default Component;
