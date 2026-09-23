import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/s/sptug9f2o.css';
import '../../css/c/c6upwkbge.css';
import '../../css/s/sjzx1lb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="sptug9f2o"/><path class="c6upwkbge"/><path class="sjzx1lb1f"/></g>`,
		"fallback": "keyline-icons:chart-gantt-sparkles-sharp-two-tone",
	});
}

export default Component;
