import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2z_0u2cy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2z_0u2cy"/>`,
		"fallback": "vaadin:adjust",
	});
}

export default Component;
