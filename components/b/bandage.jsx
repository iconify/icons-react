import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-kb03byd.css';
import '../../css/b/behsungnr.css';
import '../../css/z/z7nwzw02a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v-kb03byd"/><path class="behsungnr"/><path class="z7nwzw02a"/></g>`,
		"fallback": "andrsrxn:bandage",
	});
}

export default Component;
