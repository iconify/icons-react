import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yeawe-bln.css';
import '../../css/z/zawfv_b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yeawe-bln"/><path clip-rule="evenodd" class="zawfv_b6z"/></g>`,
		"fallback": "healthicons:autoimmune-disease-outline-24px",
	});
}

export default Component;
