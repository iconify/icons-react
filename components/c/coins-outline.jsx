import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik9np1c8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik9np1c8t"/>`,
		"fallback": "mdi:coins-outline",
	});
}

export default Component;
