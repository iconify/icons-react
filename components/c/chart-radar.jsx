import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vy5_7wcbp.css';
import '../../css/t/txblek7-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vy5_7wcbp"/><path class="txblek7-f"/></g>`,
		"fallback": "hugeicons:chart-radar",
	});
}

export default Component;
