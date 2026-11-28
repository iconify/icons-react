import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d98vhxb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d98vhxb6v"/>`,
		"fallback": "iconaut:cloud-rain-wind-solid",
	});
}

export default Component;
