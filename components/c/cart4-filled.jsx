import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a7srrkvvz.css';
import '../../css/r/rjqr_5fsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a7srrkvvz"/><path clip-rule="evenodd" class="rjqr_5fsv"/></g>`,
		"fallback": "reicon:cart4-filled",
	});
}

export default Component;
