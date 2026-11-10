import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0x4dfbdc.css';
import '../../css/v/vtmj6lb1b.css';
import '../../css/l/lm11c834f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c0x4dfbdc"/><path class="vtmj6lb1b"/><path class="lm11c834f"/></g>`,
		"fallback": "andrsrxn:folder-music",
	});
}

export default Component;
