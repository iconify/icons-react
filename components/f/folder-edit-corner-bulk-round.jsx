import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wvphlzbwh.css';
import '../../css/l/l0xf8klep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wvphlzbwh"/><path class="l0xf8klep"/></g>`,
		"fallback": "coolicons:folder-edit-corner-bulk-round",
	});
}

export default Component;
