import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/esfbuxb0w.css';
import '../../css/q/q-vekkb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="esfbuxb0w"/><path class="q-vekkb6p"/></g>`,
		"fallback": "coolicons:helicopter-duotone-round",
	});
}

export default Component;
