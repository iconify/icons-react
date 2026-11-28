import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f6jwsgbih.css';
import '../../css/m/mzgxqybga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f6jwsgbih"/><path class="mzgxqybga"/></g>`,
		"fallback": "iconaut:bot-frown-solid",
	});
}

export default Component;
