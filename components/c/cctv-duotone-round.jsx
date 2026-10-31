import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zkugb-9cx.css';
import '../../css/o/oulhoxbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zkugb-9cx"/><path class="oulhoxbaj"/></g>`,
		"fallback": "coolicons:cctv-duotone-round",
	});
}

export default Component;
