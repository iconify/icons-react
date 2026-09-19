import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kyyysb_sg.css';
import '../../css/w/w48ql80_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kyyysb_sg"/><path class="w48ql80_b"/></g>`,
		"fallback": "iconamoon:delivery-duotone",
	});
}

export default Component;
