import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kcb-qgn8j.css';
import '../../css/z/zspru-b6e.css';
import '../../css/g/g5gj012zd.css';
import '../../css/d/d74wulbzc.css';
import '../../css/v/v5lk3ggit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kcb-qgn8j"/><path class="zspru-b6e"/><path class="g5gj012zd"/><path class="d74wulbzc"/><path class="v5lk3ggit"/></g>`,
		"fallback": "streamline-freehand-color:dashboard-browser-gauge",
	});
}

export default Component;
