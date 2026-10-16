import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztyptnway.css';
import '../../css/y/ybpeyub_t.css';
import '../../css/i/i7lw3hb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ztyptnway"/><path class="ybpeyub_t"/><path class="i7lw3hb6z"/></g>`,
		"fallback": "andrsrxn:air-conditioner",
	});
}

export default Component;
