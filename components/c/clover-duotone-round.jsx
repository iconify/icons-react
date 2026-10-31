import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ie5lx4f0p.css';
import '../../css/g/g-g57vb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ie5lx4f0p"/><path class="g-g57vb9s"/></g>`,
		"fallback": "coolicons:clover-duotone-round",
	});
}

export default Component;
