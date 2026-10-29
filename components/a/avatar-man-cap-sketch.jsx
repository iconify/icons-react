import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a7ig7gbdc.css';
import '../../css/x/x5lnnybdj.css';
import '../../css/i/iy9d3l7td.css';
import '../../css/q/q0yce_brc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a7ig7gbdc wm-k"/><path class="wm-a x5lnnybdj"/><path class="iy9d3l7td wm-k"/><path class="q0yce_brc wm-a"/></g>`,
		"fallback": "withicons:avatar-man-cap-sketch",
	});
}

export default Component;
