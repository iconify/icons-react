import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lptmmu5sp.css';
import '../../css/q/qkfd4jbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lptmmu5sp"/><path clip-rule="evenodd" class="qkfd4jbpc"/></g>`,
		"fallback": "reicon:align-left-duotone",
	});
}

export default Component;
