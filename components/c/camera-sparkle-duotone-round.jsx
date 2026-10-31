import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cyyl5cc-f.css';
import '../../css/n/n1kn3cbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cyyl5cc-f"/><path class="n1kn3cbrq"/></g>`,
		"fallback": "coolicons:camera-sparkle-duotone-round",
	});
}

export default Component;
