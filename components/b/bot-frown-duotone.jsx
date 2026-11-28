import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o8ai6fnjp.css';
import '../../css/y/ywuwiwlwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o8ai6fnjp secondary"/><path class="primary ywuwiwlwo"/></g>`,
		"fallback": "iconaut:bot-frown-duotone",
	});
}

export default Component;
