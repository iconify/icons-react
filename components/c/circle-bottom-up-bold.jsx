import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2a0f5bgc.css';
import '../../css/m/mao0_zbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c2a0f5bgc"/><path class="mao0_zbko"/>`,
		"fallback": "solar:circle-bottom-up-bold",
	});
}

export default Component;
