import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpq7__boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpq7__boy"/>`,
		"fallback": "mdi:clock-time-nine-outline",
	});
}

export default Component;
