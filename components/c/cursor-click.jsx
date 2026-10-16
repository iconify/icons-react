import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/daeckebuf.css';
import '../../css/s/sx8ya7bam.css';
import '../../css/a/a6034rvxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="daeckebuf"/><path class="sx8ya7bam"/><path class="a6034rvxs"/></g>`,
		"fallback": "andrsrxn:cursor-click",
	});
}

export default Component;
