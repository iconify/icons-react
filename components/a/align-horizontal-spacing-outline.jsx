import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhxhq9bmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fhxhq9bmo"/>`,
		"fallback": "solar:align-horizontal-spacing-outline",
	});
}

export default Component;
