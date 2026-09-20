import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yke-_vbol.css';
import '../../css/k/kg1p852qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yke-_vbol"/><path clip-rule="evenodd" class="kg1p852qb"/></g>`,
		"fallback": "reicon:dollar-filled",
	});
}

export default Component;
