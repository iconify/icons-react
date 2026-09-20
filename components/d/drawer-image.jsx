import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhl62ksrv.css';
import '../../css/g/ggmqvab_j.css';
import '../../css/x/xo8kc-b9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uhl62ksrv"/><path class="ggmqvab_j"/><path class="xo8kc-b9g"/></g>`,
		"fallback": "streamline-freehand-color:drawer-image",
	});
}

export default Component;
