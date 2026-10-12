import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ett7asb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ett7asb6l"/>`,
		"fallback": "andrsrxn:diff",
	});
}

export default Component;
