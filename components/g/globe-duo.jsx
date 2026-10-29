import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oan3fnbps.css';
import '../../css/h/h02lebcls.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/c/c6bmv3q-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oan3fnbps"/><path class="h02lebcls wm-a"/><path class="yw4fz_b6b"/><path class="c6bmv3q-h wm-a"/></g>`,
		"fallback": "withicons:globe-duo",
	});
}

export default Component;
