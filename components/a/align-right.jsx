import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrr8yyb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrr8yyb9o"/>`,
		"fallback": "withicons:align-right",
	});
}

export default Component;
