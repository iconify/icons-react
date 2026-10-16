import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syffbkb-v.css';
import '../../css/j/j04q1cb1h.css';
import '../../css/z/zkta6vbnt.css';
import '../../css/p/p4fg2sbvf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syffbkb-v"/><path class="j04q1cb1h"/><path class="zkta6vbnt"/><path class="p4fg2sbvf"/>`,
		"fallback": "energy-icons:geiger-counter-48",
	});
}

export default Component;
