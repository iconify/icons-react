import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/drgourb2x.css';
import '../../css/e/ee72xe_hx.css';
import '../../css/b/bt4eanb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="drgourb2x"/><path class="ee72xe_hx wm-a"/><path class="bt4eanb_m"/></g>`,
		"fallback": "withicons:building-2-duo",
	});
}

export default Component;
