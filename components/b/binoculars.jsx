import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qc8ffrbjk.css';
import '../../css/t/tqtl-db9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="qc8ffrbjk"/><path class="tqtl-db9k"/></g>`,
		"fallback": "streamline-plump:binoculars",
	});
}

export default Component;
