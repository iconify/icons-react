import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6qfcegov.css';
import '../../css/q/qhe-99bol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6qfcegov"/><path class="qhe-99bol"/>`,
		"fallback": "streamline-freehand:apps-monitor-user",
	});
}

export default Component;
