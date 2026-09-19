import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xq0715buf.css';
import '../../css/o/opln_oo7l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xq0715buf"/><path class="opln_oo7l"/></g>`,
		"fallback": "healthicons:finance-dept",
	});
}

export default Component;
