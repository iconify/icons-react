import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maz51bb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maz51bb-c"/>`,
		"fallback": "eva:crop-outline",
	});
}

export default Component;
