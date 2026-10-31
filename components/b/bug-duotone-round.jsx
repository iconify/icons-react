import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ull91gb3e.css';
import '../../css/k/kxy0xhhra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ull91gb3e"/><path class="kxy0xhhra"/></g>`,
		"fallback": "coolicons:bug-duotone-round",
	});
}

export default Component;
