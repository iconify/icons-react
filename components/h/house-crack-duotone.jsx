import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xi_3vtomh.css';
import '../../css/p/ptb_19p4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xi_3vtomh"/><path class="primary ptb_19p4e"/></g>`,
		"fallback": "iconaut:house-crack-duotone",
	});
}

export default Component;
