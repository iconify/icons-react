import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nnjq4tb9x.css';
import '../../css/c/c7flqrulw.css';
import '../../css/l/lx0v1-bxn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nnjq4tb9x"/><path clip-rule="evenodd" class="c7flqrulw"/><path class="lx0v1-bxn"/></g>`,
		"fallback": "healthicons:fhir-logo2x-outline",
	});
}

export default Component;
