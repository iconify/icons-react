import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5ap_-bph.css';
import '../../css/x/x-4xv8b7b.css';
import '../../css/t/teh3e_bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m5ap_-bph"/><path clip-rule="evenodd" class="x-4xv8b7b"/><path class="teh3e_bpj"/></g>`,
		"fallback": "healthicons:dizzy-outline-24px",
	});
}

export default Component;
