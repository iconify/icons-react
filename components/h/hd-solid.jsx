import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy8o4rbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy8o4rbkb"/>`,
		"fallback": "iconaut:hd-solid",
	});
}

export default Component;
