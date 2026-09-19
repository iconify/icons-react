import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/outcig9zn.css';
import '../../css/i/i0orfx9cy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="outcig9zn"/><path class="i0orfx9cy"/>`,
		"fallback": "carbon:information-disabled",
	});
}

export default Component;
