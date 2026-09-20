import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7_llabwm.css';
import '../../css/q/qh4ywac4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i7_llabwm"/><path class="qh4ywac4u"/></g>`,
		"fallback": "si:ai-edit-duotone",
	});
}

export default Component;
