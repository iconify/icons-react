import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syqutab6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syqutab6p"/>`,
		"fallback": "mdi:battery-arrow-up-outline",
	});
}

export default Component;
