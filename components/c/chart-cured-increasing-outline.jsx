import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/terzj2bry.css';
import '../../css/z/z-mmvvbvf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="terzj2bry"/><path clip-rule="evenodd" class="z-mmvvbvf"/></g>`,
		"fallback": "healthicons:chart-cured-increasing-outline",
	});
}

export default Component;
