import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a6ey7sbng.css';
import '../../css/r/rvvxdgw4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a6ey7sbng"/><path class="rvvxdgw4h wm-a"/></g>`,
		"fallback": "withicons:face-mask",
	});
}

export default Component;
