import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e-o28mhxw.css';
import '../../css/i/itb9a6-ck.css';
import '../../css/l/l5h1hy93t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e-o28mhxw"/><path class="itb9a6-ck"/><path clip-rule="evenodd" class="l5h1hy93t"/></g>`,
		"fallback": "reicon:dumbbell3-duotone",
	});
}

export default Component;
