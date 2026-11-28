import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mmc624bzj.css';
import '../../css/g/guq4s9j5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mmc624bzj secondary"/><path class="guq4s9j5s primary"/></g>`,
		"fallback": "iconaut:corner-up-right-duotone",
	});
}

export default Component;
