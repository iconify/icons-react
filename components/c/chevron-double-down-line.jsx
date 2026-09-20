import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nxlot0o0m.css';
import '../../css/h/hf1ty3bjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nxlot0o0m"/><path class="hf1ty3bjw"/></g>`,
		"fallback": "majesticons:chevron-double-down-line",
	});
}

export default Component;
