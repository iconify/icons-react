import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uumv_0bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uumv_0bli"/>`,
		"fallback": "mdi:battery-charging-30",
	});
}

export default Component;
