import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtv1suskr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtv1suskr"/>`,
		"fallback": "iconaut:banana-solid",
	});
}

export default Component;
