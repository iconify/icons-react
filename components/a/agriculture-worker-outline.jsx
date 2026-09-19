import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l1_koccvr.css';
import '../../css/l/lsl7qwgdg.css';
import '../../css/t/ttmslz4cc.css';
import '../../css/w/w1nca4blz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l1_koccvr"/><path class="lsl7qwgdg"/><path clip-rule="evenodd" class="ttmslz4cc"/><path class="w1nca4blz"/></g>`,
		"fallback": "healthicons:agriculture-worker-outline",
	});
}

export default Component;
