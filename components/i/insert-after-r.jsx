import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c9r51abmb.css';
import '../../css/y/yd8umvq9y.css';
import '../../css/y/y46nsnbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c9r51abmb"/><path clip-rule="evenodd" class="yd8umvq9y"/><path class="y46nsnbkb"/></g>`,
		"fallback": "gg:insert-after-r",
	});
}

export default Component;
