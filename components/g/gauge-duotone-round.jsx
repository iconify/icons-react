import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gievz-bbr.css';
import '../../css/o/os8-7k32y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gievz-bbr"/><path class="os8-7k32y"/></g>`,
		"fallback": "coolicons:gauge-duotone-round",
	});
}

export default Component;
