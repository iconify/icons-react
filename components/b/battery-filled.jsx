import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xobw0_9rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xobw0_9rr"/>`,
		"fallback": "boxicons:battery-filled",
	});
}

export default Component;
