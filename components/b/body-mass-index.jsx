import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nfiw-el-b.css';
import '../../css/z/zcjcazp3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nfiw-el-b"/><path clip-rule="evenodd" class="zcjcazp3s"/></g>`,
		"fallback": "healthicons:body-mass-index",
	});
}

export default Component;
