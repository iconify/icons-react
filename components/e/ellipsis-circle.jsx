import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wc2k_3bib.css';
import '../../css/f/f_5j5hbbh.css';
import '../../css/y/yn91wp2qf.css';
import '../../css/h/ho6q2_ixk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wc2k_3bib"/><rect class="f_5j5hbbh"/><rect class="yn91wp2qf"/><rect class="ho6q2_ixk"/></g>`,
		"fallback": "glyphs-poly:ellipsis-circle",
	});
}

export default Component;
