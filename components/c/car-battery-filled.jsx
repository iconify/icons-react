import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7-k3_nsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7-k3_nsq"/>`,
		"fallback": "boxicons:car-battery-filled",
	});
}

export default Component;
