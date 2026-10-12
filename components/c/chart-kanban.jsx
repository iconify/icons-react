import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9_rw-ber.css';
import '../../css/v/v913v-w3w.css';
import '../../css/d/d-xtpsv4d.css';
import '../../css/a/aq2wiwh_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(180 8.95 16.73)" class="b9_rw-ber"/><rect transform="rotate(180 21.16 13.3)" class="v913v-w3w"/><path class="d-xtpsv4d"/><path class="aq2wiwh_g"/></g>`,
		"fallback": "andrsrxn:chart-kanban",
	});
}

export default Component;
