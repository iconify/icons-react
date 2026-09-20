import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io6equpbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io6equpbr"/>`,
		"fallback": "ri:arrow-left-right-fill",
	});
}

export default Component;
