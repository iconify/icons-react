import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ycqqzkbcl.css';
import '../../css/n/ny8-p3lhx.css';
import '../../css/f/fy-5hfbxy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ycqqzkbcl"/><path class="ny8-p3lhx"/><path class="fy-5hfbxy"/></g>`,
		"fallback": "streamline-plump:firefighter-truck",
	});
}

export default Component;
