import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf2c8xxts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf2c8xxts"/>`,
		"fallback": "ri:chat-thread-fill",
	});
}

export default Component;
