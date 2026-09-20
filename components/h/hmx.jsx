import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziltb3b7d.css';
import '../../css/w/wh9r_4xsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziltb3b7d"/><path class="wh9r_4xsa"/>`,
		"fallback": "token:hmx",
	});
}

export default Component;
