import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuw8qb5ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vuw8qb5ns"/>`,
		"fallback": "griddy-icons:email-new-filled",
	});
}

export default Component;
