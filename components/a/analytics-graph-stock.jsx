import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f007flbyz.css';
import '../../css/t/t8lbebq8p.css';
import '../../css/d/dxdqzdh0d.css';
import '../../css/v/vi5v8ey_t.css';
import '../../css/k/k7ay_mqqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f007flbyz"/><path class="t8lbebq8p"/><path class="dxdqzdh0d"/><path class="vi5v8ey_t"/><path class="k7ay_mqqt"/></g>`,
		"fallback": "streamline-freehand-color:analytics-graph-stock",
	});
}

export default Component;
