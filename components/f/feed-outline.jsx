import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsv5t3btn.css';
import '../../css/u/uq14z1bmm.css';
import '../../css/q/qq35bdc4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hsv5t3btn"/><path class="uq14z1bmm"/><path clip-rule="evenodd" class="qq35bdc4k"/>`,
		"fallback": "solar:feed-outline",
	});
}

export default Component;
