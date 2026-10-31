import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w1he_aban.css';
import '../../css/t/tb3712bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w1he_aban"/><path class="tb3712bpl"/></g>`,
		"fallback": "coolicons:chart-donut-bulk-round",
	});
}

export default Component;
