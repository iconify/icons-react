import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx_j5lb4z.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/i/idcqbdd9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="lx_j5lb4z"/><circle class="mpf1g8bav"/><path class="idcqbdd9o"/></g>`,
		"fallback": "andrsrxn:clock-hour-one",
	});
}

export default Component;
