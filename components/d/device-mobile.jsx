import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk-w9rb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk-w9rb1a"/>`,
		"fallback": "heroicons-outline:device-mobile",
	});
}

export default Component;
