import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afl3bub4y.css';
import '../../css/c/cll6i2boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="afl3bub4y"/><path class="cll6i2boy"/></g>`,
		"fallback": "coolicons:folder-lock-corner-duotone-round",
	});
}

export default Component;
