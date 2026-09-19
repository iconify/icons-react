import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y49b6lbzp.css';
import '../../css/i/i94opnbsv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y49b6lbzp"/><path class="i94opnbsv"/></g>`,
		"fallback": "healthicons:baby-female-0203m",
	});
}

export default Component;
