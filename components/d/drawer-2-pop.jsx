import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qep26ubpg.css';
import '../../css/o/o7bshobas.css';
import '../../css/f/foo-7ub3y.css';
import '../../css/v/vu_lsacpr.css';
import '../../css/p/prd79pb5q.css';
import '../../css/k/km74x3opg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qep26ubpg"/><path class="o7bshobas"/><path class="foo-7ub3y"/><path class="vu_lsacpr"/><path class="prd79pb5q"/><path class="km74x3opg"/></g>`,
		"fallback": "streamline-kameleon-color:drawer-2-pop",
	});
}

export default Component;
