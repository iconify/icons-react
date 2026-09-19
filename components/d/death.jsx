import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ts3q94bae.css';
import '../../css/o/oblrxabsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ts3q94bae"/><path clip-rule="evenodd" class="oblrxabsb"/></g>`,
		"fallback": "healthicons:death",
	});
}

export default Component;
