import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ctew7ohvk.css';
import '../../css/n/no8nhtb0d.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ctew7ohvk"/><path clip-rule="evenodd" class="no8nhtb0d"/></g>`,
		"fallback": "flagpack:bh",
	});
}

export default Component;
