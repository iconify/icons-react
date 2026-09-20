import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i-rte516a.css';
import '../../css/l/lh-00abdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i-rte516a"/><path class="lh-00abdz"/></g>`,
		"fallback": "reicon:circle-top-up-filled",
	});
}

export default Component;
