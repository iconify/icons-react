import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wa2i_kb9j.css';
import '../../css/b/bjix9sh7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wa2i_kb9j"/><path clip-rule="evenodd" class="bjix9sh7g"/></g>`,
		"fallback": "solar:cloud-plus-bold-duotone",
	});
}

export default Component;
