import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju-byuhch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ju-byuhch"/>`,
		"fallback": "griddy-icons:email-fast-filled",
	});
}

export default Component;
