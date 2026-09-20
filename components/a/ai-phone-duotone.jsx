import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gb7_855gm.css';
import '../../css/x/x95x1mmua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gb7_855gm"/><path class="x95x1mmua"/></g>`,
		"fallback": "si:ai-phone-duotone",
	});
}

export default Component;
