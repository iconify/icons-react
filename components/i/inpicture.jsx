import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dsmleib8v.css';
import '../../css/k/k7fwg9blz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dsmleib8v"/><path clip-rule="evenodd" class="k7fwg9blz"/></g>`,
		"fallback": "gg:inpicture",
	});
}

export default Component;
