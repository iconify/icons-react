import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j23jfj2cy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="j23jfj2cy"/>`,
		"fallback": "wordpress:chevron-down-small",
	});
}

export default Component;
