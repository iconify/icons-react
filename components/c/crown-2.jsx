import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b8d_oub3i.css';
import '../../css/u/u1x8chbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b8d_oub3i"/><path clip-rule="evenodd" class="u1x8chbdc"/></g>`,
		"fallback": "reicon:crown-2",
	});
}

export default Component;
