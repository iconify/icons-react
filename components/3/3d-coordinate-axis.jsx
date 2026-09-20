import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/iqwhbwbjv.css';
import '../../css/c/cx-1p1bfe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="iqwhbwbjv"/><path class="cx-1p1bfe"/></g>`,
		"fallback": "streamline-plump:3d-coordinate-axis",
	});
}

export default Component;
