import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tdqn4zbwe.css';
import '../../css/f/fdhuh8bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tdqn4zbwe"/><path class="fdhuh8bjk"/></g>`,
		"fallback": "streamline-sharp:double-heart",
	});
}

export default Component;
