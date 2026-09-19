import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_nhe3b0j.css';
import '../../css/o/o514wz00p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o_nhe3b0j"/><path class="o514wz00p"/></g>`,
		"fallback": "heroicons:inbox-stack-20-solid",
	});
}

export default Component;
