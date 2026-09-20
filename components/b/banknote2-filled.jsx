import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vkvn83bdy.css';
import '../../css/i/icatxci2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vkvn83bdy"/><path clip-rule="evenodd" class="icatxci2g"/></g>`,
		"fallback": "reicon:banknote2-filled",
	});
}

export default Component;
