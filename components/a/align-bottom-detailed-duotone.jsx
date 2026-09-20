import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwo85rbux.css';
import '../../css/u/uon-t8wde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wwo85rbux"/><path class="uon-t8wde"/></g>`,
		"fallback": "si:align-bottom-detailed-duotone",
	});
}

export default Component;
