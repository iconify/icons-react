import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjxw1lbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mjxw1lbwm"/>`,
		"fallback": "solar:airbuds-charge-outline",
	});
}

export default Component;
