import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xksj7ypyl.css';
import '../../css/i/iglmxs09o.css';
import '../../css/q/qnct49bib.css';
import '../../css/p/pptjt-b0f.css';
import '../../css/g/g3h4wybzg.css';
import '../../css/c/c2th_jbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xksj7ypyl"/><path class="iglmxs09o"/><path class="qnct49bib"/><path class="pptjt-b0f"/><path class="g3h4wybzg"/><path class="c2th_jbds"/></g>`,
		"fallback": "withicons-retro:fan",
	});
}

export default Component;
