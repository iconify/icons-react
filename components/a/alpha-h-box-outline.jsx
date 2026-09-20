import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmylqvzxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmylqvzxt"/>`,
		"fallback": "mdi:alpha-h-box-outline",
	});
}

export default Component;
