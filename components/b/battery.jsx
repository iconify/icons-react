import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zph7x-b0x.css';
import '../../css/o/opdbqm17y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zph7x-b0x"/><path clip-rule="evenodd" class="opdbqm17y"/></g>`,
		"fallback": "gg:battery",
	});
}

export default Component;
