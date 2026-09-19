import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oripv7bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oripv7bjx"/>`,
		"fallback": "bx:bx-wrench",
	});
}

export default Component;
