import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ixbft3bvx.css';
import '../../css/p/pe-vqcblg.css';
import '../../css/v/vm02urlpi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ixbft3bvx"/><path clip-rule="evenodd" class="pe-vqcblg"/><path class="vm02urlpi"/></g>`,
		"fallback": "healthicons:domestic-worker-alt",
	});
}

export default Component;
