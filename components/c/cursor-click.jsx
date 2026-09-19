import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlmajdbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlmajdbeo"/>`,
		"fallback": "heroicons-outline:cursor-click",
	});
}

export default Component;
