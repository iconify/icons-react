import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmos9kbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmos9kbvl"/>`,
		"fallback": "mdi:heart-outline",
	});
}

export default Component;
