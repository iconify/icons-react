import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c11ar8byz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c11ar8byz"/>`,
		"fallback": "mdi:flag-minus-outline",
	});
}

export default Component;
