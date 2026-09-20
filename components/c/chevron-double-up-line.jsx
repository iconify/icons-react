import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nfbzeacos.css';
import '../../css/i/ib8s96c5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nfbzeacos"/><path class="ib8s96c5b"/></g>`,
		"fallback": "majesticons:chevron-double-up-line",
	});
}

export default Component;
