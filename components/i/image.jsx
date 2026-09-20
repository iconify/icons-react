import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujdmpbb7x.css';
import '../../css/m/mx7m2kb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ujdmpbb7x"/><path class="mx7m2kb4p"/></g>`,
		"fallback": "mi:image",
	});
}

export default Component;
