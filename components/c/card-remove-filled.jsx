import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e0f8t6vzr.css';
import '../../css/s/s6akcqbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e0f8t6vzr"/><path class="s6akcqbre"/></g>`,
		"fallback": "reicon:card-remove-filled",
	});
}

export default Component;
