import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tqqd4b0vl.css';
import '../../css/q/qak8nzb_y.css';
import '../../css/s/s8fo7sise.css';
import '../../css/t/tqhaaztfb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tqqd4b0vl"/><path class="qak8nzb_y"/><path class="s8fo7sise"/><path class="tqhaaztfb"/></g>`,
		"fallback": "streamline-flex-color:ai-chip-robot",
	});
}

export default Component;
