import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8tmp0bjv.css';
import '../../css/n/n6jjxabfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v8tmp0bjv"/><path class="n6jjxabfo"/></g>`,
		"fallback": "reicon:additem-filled",
	});
}

export default Component;
