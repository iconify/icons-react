import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h31h1ab0l.css';
import '../../css/e/ez_wg9btp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h31h1ab0l"/><path class="ez_wg9btp"/></g>`,
		"fallback": "reicon:exit-fullscreen-duotone",
	});
}

export default Component;
