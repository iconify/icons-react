import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv5mrgn9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv5mrgn9e"/>`,
		"fallback": "keyline-icons:cursor-panel",
	});
}

export default Component;
