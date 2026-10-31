import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tpfg9chjq.css';
import '../../css/d/daas2obdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tpfg9chjq"/><path class="daas2obdg"/></g>`,
		"fallback": "coolicons:archive-bulk-round",
	});
}

export default Component;
