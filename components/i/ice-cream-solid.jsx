import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn8cowbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn8cowbus"/>`,
		"fallback": "iconaut:ice-cream-solid",
	});
}

export default Component;
