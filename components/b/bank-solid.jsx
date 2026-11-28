import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iqmopghzq.css';
import '../../css/g/g2piphrpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iqmopghzq"/><path class="g2piphrpk"/></g>`,
		"fallback": "iconaut:bank-solid",
	});
}

export default Component;
