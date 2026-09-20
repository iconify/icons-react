import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukjejbkfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukjejbkfq"/>`,
		"fallback": "mdi:desktop-tower-monitor",
	});
}

export default Component;
