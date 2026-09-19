import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hrceo_b_n.css';
import '../../css/m/mnzk3bcrc.css';
import '../../css/v/vithtcboi.css';
import '../../css/r/r5-ki1pcy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hrceo_b_n"/><path class="mnzk3bcrc"/><path class="vithtcboi"/><path clip-rule="evenodd" class="r5-ki1pcy"/></g>`,
		"fallback": "healthicons:enzyme-outline",
	});
}

export default Component;
