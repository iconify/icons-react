import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxgf3bc0d.css';
import '../../css/k/kvl3g4b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jxgf3bc0d"/><path class="kvl3g4b3w"/></g>`,
		"fallback": "andrsrxn:bluetooth-on",
	});
}

export default Component;
