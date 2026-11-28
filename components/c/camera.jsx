import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xdgjxabpg.css';
import '../../css/v/vzxf1fubx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xdgjxabpg"/><path class="vzxf1fubx"/></g>`,
		"fallback": "iconaut:camera",
	});
}

export default Component;
