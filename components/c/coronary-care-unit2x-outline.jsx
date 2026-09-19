import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xgk8dwbbn.css';
import '../../css/a/armh1275t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xgk8dwbbn"/><path clip-rule="evenodd" class="armh1275t"/></g>`,
		"fallback": "healthicons:coronary-care-unit2x-outline",
	});
}

export default Component;
