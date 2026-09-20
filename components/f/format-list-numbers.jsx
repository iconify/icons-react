import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yen6d0buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yen6d0buu"/>`,
		"fallback": "mdi:format-list-numbers",
	});
}

export default Component;
