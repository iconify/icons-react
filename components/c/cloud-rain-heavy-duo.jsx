import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es0p8gbiv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rrq4fhbji.css';
import '../../css/v/vik7aybod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es0p8gbiv secondary"/><g class="dt0cm9dhy primary"><path class="rrq4fhbji"/><path class="vik7aybod"/></g>`,
		"fallback": "iconaut:cloud-rain-heavy-duo",
	});
}

export default Component;
