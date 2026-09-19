import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ads3_mbpj.css';
import '../../css/o/oqkers1-l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ads3_mbpj"/><path class="oqkers1-l"/></g>`,
		"fallback": "healthicons:hiv-ind2x-outline",
	});
}

export default Component;
