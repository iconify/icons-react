import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i3c8uxhvl.css';
import '../../css/k/kd58e8eln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i3c8uxhvl"/><path class="kd58e8eln"/></g>`,
		"fallback": "solar:archive-minimalistic-close-bold",
	});
}

export default Component;
