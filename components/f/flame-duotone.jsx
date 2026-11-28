import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bqz_1jbgm.css';
import '../../css/t/te70qvb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bqz_1jbgm secondary"/><path class="primary te70qvb5r"/></g>`,
		"fallback": "iconaut:flame-duotone",
	});
}

export default Component;
