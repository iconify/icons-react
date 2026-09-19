import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4kr7db0h.css';
import '../../css/p/pddpvtbqq.css';
import '../../css/o/oc0vi5bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k4kr7db0h"><path class="pddpvtbqq"/><path class="oc0vi5bvd"/></g>`,
		"fallback": "iconamoon:heart-off-bold",
	});
}

export default Component;
