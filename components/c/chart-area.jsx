import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/osy_6ibpv.css';
import '../../css/q/qn-n58k_h.css';
import '../../css/g/gu3ws80px.css';
import '../../css/b/bdx1rwbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="osy_6ibpv wm-shadow"/><path class="qn-n58k_h"/><path class="gu3ws80px"/><path class="bdx1rwbro"/></g>`,
		"fallback": "withicons-retro:chart-area",
	});
}

export default Component;
