import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmpc50jny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmpc50jny"/>`,
		"fallback": "mdi:favorite-settings-outline",
	});
}

export default Component;
