import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnox2_2_k.css';
import '../../css/k/kur13mblj.css';
import '../../css/d/dr_d4wbmt.css';
import '../../css/a/aq9b667ef.css';
import '../../css/i/i8udtsb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cnox2_2_k wm-deco"/><path class="kur13mblj wm-k"/><path class="dr_d4wbmt wm-k"/><path class="aq9b667ef wm-k"/><path class="i8udtsb8f wm-shine"/></g>`,
		"fallback": "withicons-anime:arrow-down",
	});
}

export default Component;
