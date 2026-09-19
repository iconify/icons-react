import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo56a125d.css';
import '../../css/j/je4d_rxfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo56a125d"/><path class="je4d_rxfj"/>`,
		"fallback": "eva:charging-outline",
	});
}

export default Component;
