import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/live1qbjo.css';
import '../../css/v/vbfr57bfs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="live1qbjo"/><path class="vbfr57bfs"/></g>`,
		"fallback": "streamline-plump:heart-rate-pulse-graph",
	});
}

export default Component;
