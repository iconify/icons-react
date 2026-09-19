import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/plojt661r.css';
import '../../css/q/qhr95hbyn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="plojt661r"/><path clip-rule="evenodd" class="qhr95hbyn"/></g>`,
		"fallback": "healthicons:database-outline",
	});
}

export default Component;
