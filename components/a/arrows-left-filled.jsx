import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mj8a0n95i.css';
import '../../css/p/p9bp8y_oj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mj8a0n95i"/><path class="p9bp8y_oj"/></g>`,
		"fallback": "reicon:arrows-left-filled",
	});
}

export default Component;
