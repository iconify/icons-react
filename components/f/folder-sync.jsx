import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy7nu5b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy7nu5b1t"/>`,
		"fallback": "mdi:folder-sync",
	});
}

export default Component;
