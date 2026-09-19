import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s5xr45b6d.css';
import '../../css/h/ht0_pqbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s5xr45b6d"/><path class="ht0_pqbit"/></g>`,
		"fallback": "hugeicons:folder-export",
	});
}

export default Component;
