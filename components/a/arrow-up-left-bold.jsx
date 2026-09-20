import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvzl4u5ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvzl4u5ni"/>`,
		"fallback": "mdi:arrow-up-left-bold",
	});
}

export default Component;
