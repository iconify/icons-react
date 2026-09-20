import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjhbwvqze.css';
import '../../css/b/bm295x_5y.css';
import '../../css/k/kp4yyebmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rjhbwvqze"/><path class="bm295x_5y"/><path class="kp4yyebmr"/></g>`,
		"fallback": "streamline-sharp:email-attachment-image",
	});
}

export default Component;
