import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vgyk2gmja.css';
import '../../css/f/fs4o0rlgx.css';
import '../../css/n/nc-hrj18w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vgyk2gmja"/><path class="fs4o0rlgx"/><path clip-rule="evenodd" class="nc-hrj18w"/></g>`,
		"fallback": "solar:donut-bitten-bold",
	});
}

export default Component;
