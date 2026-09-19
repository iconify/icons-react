import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqkrw7bsc.css';
import '../../css/j/j5l-veb0o.css';
import '../../css/a/a_-u3wbhb.css';
import '../../css/f/f5f_y32dh.css';
import '../../css/s/sesfo_h_l.css';
import '../../css/o/omhs_ncix.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mqkrw7bsc"/><path class="j5l-veb0o"/><path class="a_-u3wbhb"/><path class="f5f_y32dh"/><path class="sesfo_h_l"/><path class="omhs_ncix"/></g>`,
		"fallback": "glyphs:bandage-duo",
	});
}

export default Component;
