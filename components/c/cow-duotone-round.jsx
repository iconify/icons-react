import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pl0kz287m.css';
import '../../css/i/im0v54a-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pl0kz287m"/><path class="im0v54a-o"/></g>`,
		"fallback": "coolicons:cow-duotone-round",
	});
}

export default Component;
