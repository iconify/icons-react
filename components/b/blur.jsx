import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z725jpbwl.css';
import '../../css/h/h6b92hbvc.css';
import '../../css/k/k40l5pl7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z725jpbwl"/><path class="h6b92hbvc"/><path class="k40l5pl7m"/></g>`,
		"fallback": "andrsrxn:blur",
	});
}

export default Component;
