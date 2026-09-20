import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8zrjkc7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8zrjkc7j"/>`,
		"fallback": "mdi:gesture-two-double-tap",
	});
}

export default Component;
