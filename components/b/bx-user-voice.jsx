import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiet4yv0k.css';
import '../../css/t/tiru1tbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiet4yv0k"/><path class="tiru1tbyt"/>`,
		"fallback": "bx:bx-user-voice",
	});
}

export default Component;
