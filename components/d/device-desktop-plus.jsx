import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_znbabqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_znbabqr"/>`,
		"fallback": "tabler:device-desktop-plus",
	});
}

export default Component;
