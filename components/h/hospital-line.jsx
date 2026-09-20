import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqfj0_b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqfj0_b4p"/>`,
		"fallback": "si:hospital-line",
	});
}

export default Component;
