import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxy9imbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxy9imbtr"/>`,
		"fallback": "mdi:battery-plus-variant",
	});
}

export default Component;
