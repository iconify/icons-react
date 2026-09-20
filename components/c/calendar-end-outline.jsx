import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4ntoybtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4ntoybtw"/>`,
		"fallback": "mdi:calendar-end-outline",
	});
}

export default Component;
