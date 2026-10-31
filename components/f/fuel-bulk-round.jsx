import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-r8gbbdj.css';
import '../../css/k/k63ox-g2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k-r8gbbdj"/><path class="k63ox-g2n"/></g>`,
		"fallback": "coolicons:fuel-bulk-round",
	});
}

export default Component;
