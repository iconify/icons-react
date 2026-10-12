import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/she30qb6v.css';
import '../../css/k/knyufdnft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="she30qb6v"/><path class="knyufdnft"/></g>`,
		"fallback": "andrsrxn:briefcase-plus",
	});
}

export default Component;
