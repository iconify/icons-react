import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf58a6b1j.css';
import '../../css/s/s8qju0q_z.css';
import '../../css/d/dtpu5cb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf58a6b1j"/><path class="s8qju0q_z"/><path class="dtpu5cb1o"/></g>`,
		"fallback": "solar:file-corrupted-bold-duotone",
	});
}

export default Component;
