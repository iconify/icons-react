import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/azaw88ucy.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/p/pu6dnmbwe.css';
import '../../css/v/v61f6f-xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="azaw88ucy"/><path class="d3y9mw6db"/><path class="pu6dnmbwe wm-a"/><path class="v61f6f-xq wm-a"/></g>`,
		"fallback": "withicons:avatar-man-afro",
	});
}

export default Component;
