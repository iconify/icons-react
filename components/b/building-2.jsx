import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bt4eanb_m.css';
import '../../css/e/ee72xe_hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bt4eanb_m"/><path class="ee72xe_hx wm-a"/></g>`,
		"fallback": "withicons:building-2",
	});
}

export default Component;
