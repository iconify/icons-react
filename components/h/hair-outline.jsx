import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nhold6bcw.css';
import '../../css/d/dk55ffbep.css';
import '../../css/d/d5xw9nb-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nhold6bcw"/><path clip-rule="evenodd" class="dk55ffbep"/><path class="d5xw9nb-m"/></g>`,
		"fallback": "healthicons:hair-outline",
	});
}

export default Component;
