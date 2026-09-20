import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mnswelb8g.css';
import '../../css/o/offerif8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mnswelb8g"/><path class="offerif8m"/></g>`,
		"fallback": "lucide:badge-turkish-lira",
	});
}

export default Component;
