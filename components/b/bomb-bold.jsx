import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pb65vs_ab.css';
import '../../css/r/rn08x5brb.css';
import '../../css/k/kcy73erti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pb65vs_ab"/><path class="rn08x5brb"/><path class="kcy73erti"/></g>`,
		"fallback": "solar:bomb-bold",
	});
}

export default Component;
