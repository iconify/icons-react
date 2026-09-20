import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir3np9cpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir3np9cpi"/>`,
		"fallback": "mdi:head-check",
	});
}

export default Component;
