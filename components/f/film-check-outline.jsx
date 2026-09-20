import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlzqg2b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlzqg2b-v"/>`,
		"fallback": "mdi:film-check-outline",
	});
}

export default Component;
