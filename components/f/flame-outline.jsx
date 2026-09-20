import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmeb5jr_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rmeb5jr_e"/>`,
		"fallback": "solar:flame-outline",
	});
}

export default Component;
