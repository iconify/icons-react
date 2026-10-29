import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2md8qh9v.css';
import '../../css/t/tna83ccep.css';
import '../../css/p/pmba489ow.css';
import '../../css/j/jj4qoyk8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r2md8qh9v wm-k"/><path class="tna83ccep wm-k"/><path class="pmba489ow wm-k"/><path class="jj4qoyk8g wm-shine"/></g>`,
		"fallback": "withicons-anime:chevron-left",
	});
}

export default Component;
