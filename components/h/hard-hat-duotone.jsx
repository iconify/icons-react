import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p09-qb5og.css';
import '../../css/c/c33y3-2ss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p09-qb5og secondary"/><path class="c33y3-2ss primary"/></g>`,
		"fallback": "iconaut:hard-hat-duotone",
	});
}

export default Component;
