import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmk0ribem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmk0ribem"/>`,
		"fallback": "gridicons:help-outline",
	});
}

export default Component;
