import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z7u4p4bhx.css';
import '../../css/x/xgmfg45qx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z7u4p4bhx"/><path clip-rule="evenodd" class="xgmfg45qx"/></g>`,
		"fallback": "healthicons:dry-eyes",
	});
}

export default Component;
