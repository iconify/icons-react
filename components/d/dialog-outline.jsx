import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/px8vwib8v.css';
import '../../css/o/olk-hrbfo.css';
import '../../css/g/g36f5_bfg.css';
import '../../css/u/u3-9r76_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="px8vwib8v"/><path class="olk-hrbfo"/><path class="g36f5_bfg"/><path class="u3-9r76_e"/></g>`,
		"fallback": "solar:dialog-outline",
	});
}

export default Component;
