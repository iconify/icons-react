import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7flt8bet.css';
import '../../css/t/ts2_okbsi.css';
import '../../css/r/rfpc2xb8q.css';
import '../../css/k/keow6bx0i.css';
import '../../css/r/rt9v9sb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h7flt8bet wm-k"/><path class="ts2_okbsi wm-shine"/><path class="rfpc2xb8q wm-shine"/><path class="keow6bx0i wm-shine"/><path class="rt9v9sb0t wm-shine"/></g>`,
		"fallback": "withicons-lunar:folder-down",
	});
}

export default Component;
