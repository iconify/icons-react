import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frtq6fbtd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fwi20wbqk.css';
import '../../css/l/l177jbcau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frtq6fbtd secondary"/><g class="dt0cm9dhy primary"><path class="fwi20wbqk"/><path class="l177jbcau"/></g>`,
		"fallback": "iconaut:flame-duo",
	});
}

export default Component;
