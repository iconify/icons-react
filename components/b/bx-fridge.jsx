import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn_7obc0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn_7obc0p"/>`,
		"fallback": "bx:bx-fridge",
	});
}

export default Component;
