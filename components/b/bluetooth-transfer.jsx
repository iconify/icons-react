import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsfww-brk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsfww-brk"/>`,
		"fallback": "mdi:bluetooth-transfer",
	});
}

export default Component;
