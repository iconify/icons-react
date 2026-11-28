import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yryt3tq9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yryt3tq9y"/>`,
		"fallback": "iconaut:chart-radar-solid",
	});
}

export default Component;
