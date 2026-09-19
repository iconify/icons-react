import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbu_oejkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbu_oejkh"/>`,
		"fallback": "flowbite:close-sidebar-alt-outline",
	});
}

export default Component;
