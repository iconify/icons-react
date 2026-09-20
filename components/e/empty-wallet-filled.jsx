import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uiob_yb8t.css';
import '../../css/s/s_fnrmrdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uiob_yb8t"/><path class="s_fnrmrdf"/></g>`,
		"fallback": "reicon:empty-wallet-filled",
	});
}

export default Component;
