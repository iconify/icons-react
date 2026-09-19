import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek3i1rb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ek3i1rb9e"/>`,
		"fallback": "griddy-icons:email-fast",
	});
}

export default Component;
