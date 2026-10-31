import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sedmwuddk.css';
import '../../css/d/d21zkk1sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sedmwuddk"/><path class="d21zkk1sr"/></g>`,
		"fallback": "coolicons:currency-ethereum-duotone-round",
	});
}

export default Component;
