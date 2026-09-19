import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/irq2_dbnj.css';
import '../../css/r/reibu1jor.css';
import '../../css/p/ps1k-2b5u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="irq2_dbnj"/><path clip-rule="evenodd" class="reibu1jor"/><path class="ps1k-2b5u"/></g>`,
		"fallback": "healthicons:dhis2-logo2x-outline",
	});
}

export default Component;
