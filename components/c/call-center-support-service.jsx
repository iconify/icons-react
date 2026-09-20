import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/lopfipyxu.css';
import '../../css/s/siczk_8ws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="lopfipyxu"/><path class="siczk_8ws"/></g>`,
		"fallback": "streamline-plump:call-center-support-service",
	});
}

export default Component;
