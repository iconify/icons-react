import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/an7gnjevq.css';
import '../../css/l/lfhpljpco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="an7gnjevq"/><path class="lfhpljpco"/></g>`,
		"fallback": "andrsrxn:gallery-plus",
	});
}

export default Component;
