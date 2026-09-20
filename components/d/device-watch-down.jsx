import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikp_rhbez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikp_rhbez"/>`,
		"fallback": "tabler:device-watch-down",
	});
}

export default Component;
