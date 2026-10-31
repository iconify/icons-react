import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/os1jtewbv.css';
import '../../css/d/d8bs5561x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="os1jtewbv"/><path class="d8bs5561x"/></g>`,
		"fallback": "coolicons:heart-duotone-round",
	});
}

export default Component;
