import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhx2a_1cy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhx2a_1cy"/>`,
		"fallback": "mingcute:book-headphones-line",
	});
}

export default Component;
