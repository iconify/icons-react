import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw_e8xhas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw_e8xhas"/>`,
		"fallback": "mdi:hamburger-plus",
	});
}

export default Component;
