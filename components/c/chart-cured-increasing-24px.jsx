import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bshk_xqgt.css';
import '../../css/h/hpfukmzrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bshk_xqgt"/><path class="hpfukmzrz"/></g>`,
		"fallback": "healthicons:chart-cured-increasing-24px",
	});
}

export default Component;
