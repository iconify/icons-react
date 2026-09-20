import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qpnl_kb9p.css';
import '../../css/h/hwywffbxj.css';
import '../../css/o/op-uyebei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qpnl_kb9p"/><path clip-rule="evenodd" class="hwywffbxj"/><path class="op-uyebei"/></g>`,
		"fallback": "solar:camera-add-bold-duotone",
	});
}

export default Component;
