import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wukql_a8h.css';
import '../../css/k/k_ru26bkt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wukql_a8h"/><path class="k_ru26bkt"/></g>`,
		"fallback": "healthicons:chart-cured-decreasing",
	});
}

export default Component;
