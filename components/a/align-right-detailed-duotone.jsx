import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijpbx-baj.css';
import '../../css/s/sbw23ebxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ijpbx-baj"/><path class="sbw23ebxk"/></g>`,
		"fallback": "si:align-right-detailed-duotone",
	});
}

export default Component;
