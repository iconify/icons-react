import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7xt40b-m.css';
import '../../css/m/ms8y08bns.css';
import '../../css/x/xxt8oxbcp.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t7xt40b-m"/><path clip-rule="evenodd" class="ms8y08bns"/><path clip-rule="evenodd" class="xxt8oxbcp"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:code-off",
	});
}

export default Component;
