import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ir6azcbjo.css';
import '../../css/j/jn95x9bkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ir6azcbjo secondary"/><path class="jn95x9bkh primary"/></g>`,
		"fallback": "iconaut:hotel-duotone",
	});
}

export default Component;
