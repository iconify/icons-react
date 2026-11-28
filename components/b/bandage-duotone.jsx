import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/if4nfv_gb.css';
import '../../css/e/e3om2ojmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="if4nfv_gb secondary"/><path class="e3om2ojmb primary"/></g>`,
		"fallback": "iconaut:bandage-duotone",
	});
}

export default Component;
