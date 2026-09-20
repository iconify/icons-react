import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sux_9dg_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sux_9dg_s"/>`,
		"fallback": "mdi:human-male-female",
	});
}

export default Component;
