import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-vlo5b_t.css';
import '../../css/u/upfsvpbbt.css';
import '../../css/i/ijzt6mbak.css';
import '../../css/s/s8qju0q_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o-vlo5b_t"/><path class="upfsvpbbt"/><path class="ijzt6mbak"/><path class="s8qju0q_z"/></g>`,
		"fallback": "solar:file-badge-bold-duotone",
	});
}

export default Component;
