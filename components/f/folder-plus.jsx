import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oiuiv5blj.css';
import '../../css/s/shv3ws-ls.css';
import '../../css/i/i0hrabppd.css';
import '../../css/m/meelv53to.css';
import '../../css/r/rt9v9sb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oiuiv5blj wm-k"/><path class="shv3ws-ls wm-shine"/><path class="i0hrabppd wm-shine"/><path class="meelv53to wm-shine"/><path class="rt9v9sb0t wm-shine"/></g>`,
		"fallback": "withicons-lunar:folder-plus",
	});
}

export default Component;
