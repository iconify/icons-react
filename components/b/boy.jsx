import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/adix_q8gw.css';
import '../../css/i/i2icisbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="adix_q8gw"/><path clip-rule="evenodd" class="i2icisbhv"/></g>`,
		"fallback": "gg:boy",
	});
}

export default Component;
