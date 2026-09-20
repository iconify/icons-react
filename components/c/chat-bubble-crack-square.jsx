import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mlki84b5v.css';
import '../../css/h/hty5jrb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mlki84b5v"/><path class="hty5jrb4i"/></g>`,
		"fallback": "streamline-sharp:chat-bubble-crack-square",
	});
}

export default Component;
