import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umd0n7wwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umd0n7wwl"/>`,
		"fallback": "mdi:arrow-left-bottom-bold",
	});
}

export default Component;
