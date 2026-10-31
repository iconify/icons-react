import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hv-fi-9sv.css';
import '../../css/x/x97tf7tvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hv-fi-9sv"/><path class="x97tf7tvo"/></g>`,
		"fallback": "coolicons:image-duotone-round",
	});
}

export default Component;
