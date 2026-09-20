import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/n5jcoiuik.css';
import '../../css/e/ebhbp_bat.css';
import '../../css/c/cg_4ltbia.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="n5jcoiuik"/><path clip-rule="evenodd" class="ebhbp_bat"/><path class="cg_4ltbia"/></g>`,
		"fallback": "streamline-plump:content-statistic",
	});
}

export default Component;
