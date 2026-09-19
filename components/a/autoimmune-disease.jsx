import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pz515pmtt.css';
import '../../css/r/rvpeyybdv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pz515pmtt"/><path clip-rule="evenodd" class="rvpeyybdv"/></g>`,
		"fallback": "healthicons:autoimmune-disease",
	});
}

export default Component;
