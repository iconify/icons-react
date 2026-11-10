import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opu_zgbun.css';
import '../../css/b/bn9byo-4k.css';
import '../../css/w/wipq3cbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="opu_zgbun"/><path class="bn9byo-4k"/><path class="wipq3cbdd"/></g>`,
		"fallback": "andrsrxn:earbuds-left",
	});
}

export default Component;
