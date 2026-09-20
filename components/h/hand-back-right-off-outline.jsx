import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viert1r8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viert1r8c"/>`,
		"fallback": "mdi:hand-back-right-off-outline",
	});
}

export default Component;
