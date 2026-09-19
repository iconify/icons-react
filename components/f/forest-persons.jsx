import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x84abhbkh.css';
import '../../css/l/lwetnab-t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x84abhbkh"/><path class="lwetnab-t"/></g>`,
		"fallback": "healthicons:forest-persons",
	});
}

export default Component;
