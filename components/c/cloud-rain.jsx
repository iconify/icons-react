import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xxs9d-2ct.css';
import '../../css/o/oc52qlt0m.css';
import '../../css/d/dad0rbcyz.css';
import '../../css/r/r81-4itjw.css';
import '../../css/s/s0vjc9b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xxs9d-2ct"/><path class="oc52qlt0m"/><path class="dad0rbcyz"/><path class="r81-4itjw"/><path class="s0vjc9b-n"/></g>`,
		"fallback": "withicons-retro:cloud-rain",
	});
}

export default Component;
