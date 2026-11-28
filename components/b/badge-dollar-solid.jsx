import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu8r20bdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu8r20bdr"/>`,
		"fallback": "iconaut:badge-dollar-solid",
	});
}

export default Component;
