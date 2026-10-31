import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qkpf7-2jn.css';
import '../../css/n/nnzchgbnn.css';
import '../../css/t/tldit3bfr.css';
import '../../css/w/wbnx7rnmg.css';
import '../../css/j/jua2lqbhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qkpf7-2jn wm-shadow"/><path class="nnzchgbnn wm-shadow"/><path class="tldit3bfr"/><path class="wbnx7rnmg"/><path class="jua2lqbhh"/></g>`,
		"fallback": "withicons-brutal:image",
	});
}

export default Component;
