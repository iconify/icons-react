import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxtahobap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oxtahobap"/>`,
		"fallback": "keyline-icons:circle-arrow-up-left-fill",
	});
}

export default Component;
