import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0b4rkogy.css';
import '../../css/g/g2_zohbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i0b4rkogy"/><path clip-rule="evenodd" class="g2_zohbvs"/></g>`,
		"fallback": "gg:chevron-up-o",
	});
}

export default Component;
