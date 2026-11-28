import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv03ee_gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv03ee_gy"/>`,
		"fallback": "noviair:gamepad-check",
	});
}

export default Component;
