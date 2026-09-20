import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bgl1wz4_k.css';
import '../../css/t/tsh0j704h.css';
import '../../css/j/j5o3tkw7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bgl1wz4_k"/><path class="tsh0j704h"/><path clip-rule="evenodd" class="j5o3tkw7k"/></g>`,
		"fallback": "reicon:dropper3",
	});
}

export default Component;
