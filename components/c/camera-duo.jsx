import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq8x4zxcz.css';
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
		"content": `<path class="gq8x4zxcz secondary"/><g class="dt0cm9dhy primary"><path class="xdgjxabpg"/><path class="vzxf1fubx"/></g>`,
		"fallback": "iconaut:camera-duo",
	});
}

export default Component;
