import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_8-bebjz.css';
import '../../css/c/c7izx4-ew.css';
import '../../css/x/x1etxubhn.css';
import '../../css/x/x8gppwbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_8-bebjz"/><path class="c7izx4-ew"/><path class="x1etxubhn"/><path class="x8gppwbur"/>`,
		"fallback": "solar:floor-lamp-bold",
	});
}

export default Component;
