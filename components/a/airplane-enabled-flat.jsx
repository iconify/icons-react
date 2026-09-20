import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2zk_9ikp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2zk_9ikp"/>`,
		"fallback": "streamline-color:airplane-enabled-flat",
	});
}

export default Component;
