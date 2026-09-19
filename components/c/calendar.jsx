import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kieqtykkv.css';
import '../../css/w/w723mibye.css';
import '../../css/v/vio2kzbrd.css';

const viewBox = {"width":34,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kieqtykkv"/><path class="w723mibye"/><path class="vio2kzbrd"/></g>`,
		"fallback": "et:calendar",
	});
}

export default Component;
