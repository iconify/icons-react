import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qh4ywac4u.css';
import '../../css/f/fl-6dubin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qh4ywac4u"/><path class="fl-6dubin"/></g>`,
		"fallback": "si:edit-detailed-duotone",
	});
}

export default Component;
