import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jtkvb9fgt.css';
import '../../css/q/qxgopybcq.css';
import '../../css/g/gri0ybjpd.css';
import '../../css/y/yb8pm2b6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jtkvb9fgt"/><path class="qxgopybcq"/><path class="gri0ybjpd"/><path class="yb8pm2b6m"/></g>`,
		"fallback": "keyline-icons:chart-line-sparkles-sharp-duotone",
	});
}

export default Component;
