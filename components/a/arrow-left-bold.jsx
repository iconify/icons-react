import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s43x5mb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s43x5mb9n"/>`,
		"fallback": "mdi:arrow-left-bold",
	});
}

export default Component;
