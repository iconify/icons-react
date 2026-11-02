import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyue2kdmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyue2kdmi"/>`,
		"fallback": "mingcute:currency-lira-2-fill",
	});
}

export default Component;
