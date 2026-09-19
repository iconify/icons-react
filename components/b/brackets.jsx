import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qenn60biw.css';
import '../../css/m/mz87cubvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qenn60biw"/><path clip-rule="evenodd" class="mz87cubvq"/></g>`,
		"fallback": "gg:brackets",
	});
}

export default Component;
