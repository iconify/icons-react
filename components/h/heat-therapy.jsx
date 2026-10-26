import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vd1zo2b8e.css';
import '../../css/r/rspme6bbw.css';
import '../../css/v/vs-o0_phq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vd1zo2b8e"/><path class="rspme6bbw"/><path class="vs-o0_phq"/></g>`,
		"fallback": "healthicons:heat-therapy",
	});
}

export default Component;
