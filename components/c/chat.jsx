import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s0tc8kbql.css';
import '../../css/m/m5r2ewbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s0tc8kbql"/><path class="m5r2ewbsv"/></g>`,
		"fallback": "hugeicons:chat",
	});
}

export default Component;
