import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gw1m5_b6h.css';
import '../../css/j/j1e9bv-lb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gw1m5_b6h"/><rect class="j1e9bv-lb"/></g>`,
		"fallback": "lucide:card-sim",
	});
}

export default Component;
