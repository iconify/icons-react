import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/m2bbeor6h.css';
import '../../css/c/cehlimbge.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="m2bbeor6h"/><path class="cehlimbge"/></g>`,
		"fallback": "streamline-plump:bomb",
	});
}

export default Component;
