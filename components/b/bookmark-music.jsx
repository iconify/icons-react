import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqbjj5byu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqbjj5byu"/>`,
		"fallback": "mdi:bookmark-music",
	});
}

export default Component;
