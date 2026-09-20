import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q3lxyfcnv.css';
import '../../css/i/i-emrwbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q3lxyfcnv"/><path class="i-emrwbnf"/></g>`,
		"fallback": "reicon:gamepad-low",
	});
}

export default Component;
