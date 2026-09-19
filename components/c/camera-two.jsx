import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dq65a4e6h.css';
import '../../css/v/v40rf1bhl.css';
import '../../css/v/vbyp6jb4e.css';
import '../../css/l/l4y0xgwkr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="dq65a4e6h"/><path class="v40rf1bhl"/><circle class="vbyp6jb4e"/><circle class="l4y0xgwkr"/></g>`,
		"fallback": "icon-park-solid:camera-two",
	});
}

export default Component;
