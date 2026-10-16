import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ewhpzpbkp.css';
import '../../css/p/pr7b6h4up.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ewhpzpbkp"/><path class="pr7b6h4up"/></g>`,
		"fallback": "andrsrxn:chart-bar-vertical",
	});
}

export default Component;
