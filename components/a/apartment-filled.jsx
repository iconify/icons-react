import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmzwyb1sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmzwyb1sz"/>`,
		"fallback": "boxicons:apartment-filled",
	});
}

export default Component;
