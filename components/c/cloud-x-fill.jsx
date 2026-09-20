import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idh2j0bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="idh2j0bic"/>`,
		"fallback": "keyline-icons:cloud-x-fill",
	});
}

export default Component;
