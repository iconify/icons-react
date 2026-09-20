import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tflkas9tr.css';
import '../../css/b/bgpsmzcls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tflkas9tr"/><path class="bgpsmzcls"/></g>`,
		"fallback": "reicon:bitcoin-refresh-filled",
	});
}

export default Component;
