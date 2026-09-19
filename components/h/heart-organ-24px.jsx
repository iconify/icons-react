import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k2p273bzz.css';
import '../../css/m/mi_elrk5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k2p273bzz"/><path class="mi_elrk5k"/></g>`,
		"fallback": "healthicons:heart-organ-24px",
	});
}

export default Component;
