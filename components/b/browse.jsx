import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kmc3k_b0p.css';
import '../../css/d/dmpo4f1qq.css';
import '../../css/w/wytrwuroy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kmc3k_b0p"/><path class="dmpo4f1qq"/><path clip-rule="evenodd" class="wytrwuroy"/></g>`,
		"fallback": "gg:browse",
	});
}

export default Component;
