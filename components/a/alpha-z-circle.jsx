import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klrib_4gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klrib_4gm"/>`,
		"fallback": "mdi:alpha-z-circle",
	});
}

export default Component;
