import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2e5bvbiw.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k4-c7ob6h.css';
import '../../css/w/w7_mhrwuu.css';
import '../../css/p/pfvsvp_6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary t2e5bvbiw"/><g class="dt0cm9dhy primary"><path class="k4-c7ob6h"/><path class="w7_mhrwuu"/><path class="pfvsvp_6t"/></g>`,
		"fallback": "iconaut:calendar-star-duo",
	});
}

export default Component;
