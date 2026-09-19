import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u08argb9n.css';
import '../../css/g/g358m3g3x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u08argb9n"/><path clip-rule="evenodd" class="g358m3g3x"/></g>`,
		"fallback": "healthicons:biomarker2x-outline",
	});
}

export default Component;
