import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d21kzaboz.css';
import '../../css/r/rfdi0bc1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d21kzaboz"/><path class="rfdi0bc1o"/></g>`,
		"fallback": "coolicons:hand-coins-duotone-round",
	});
}

export default Component;
