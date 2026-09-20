import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twznb9xol.css';
import '../../css/q/q0zgshbyg.css';
import '../../css/a/a2yva9fxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="twznb9xol"/><path clip-rule="evenodd" class="q0zgshbyg"/><path class="a2yva9fxp"/></g>`,
		"fallback": "reicon:cassette2-filled",
	});
}

export default Component;
