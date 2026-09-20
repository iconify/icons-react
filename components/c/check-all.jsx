import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deexg9_cy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deexg9_cy"/>`,
		"fallback": "rivet-icons:check-all",
	});
}

export default Component;
