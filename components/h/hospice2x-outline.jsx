import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujwx3objr.css';
import '../../css/t/ty_oazb_v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ujwx3objr"/><path class="ty_oazb_v"/></g>`,
		"fallback": "healthicons:hospice2x-outline",
	});
}

export default Component;
