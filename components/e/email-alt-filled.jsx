import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmth8o4lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fmth8o4lt"/>`,
		"fallback": "griddy-icons:email-alt-filled",
	});
}

export default Component;
