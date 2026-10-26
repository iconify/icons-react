import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mr5m17otq.css';
import '../../css/o/o_17euwff.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mr5m17otq"/><path clip-rule="evenodd" class="o_17euwff"/></g>`,
		"fallback": "healthicons:hospital-outline",
	});
}

export default Component;
