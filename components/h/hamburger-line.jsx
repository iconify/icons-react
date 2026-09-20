import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruu9vi6cy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruu9vi6cy"/>`,
		"fallback": "mingcute:hamburger-line",
	});
}

export default Component;
