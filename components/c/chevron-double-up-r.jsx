import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ij26-ibti.css';
import '../../css/t/tcqfz7n8x.css';
import '../../css/f/fzoh80gbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ij26-ibti"/><path class="tcqfz7n8x"/><path clip-rule="evenodd" class="fzoh80gbk"/></g>`,
		"fallback": "gg:chevron-double-up-r",
	});
}

export default Component;
