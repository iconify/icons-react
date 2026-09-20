import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzxo0oq_t.css';
import '../../css/d/dx-etcmfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bzxo0oq_t"/><path class="dx-etcmfg"/></g>`,
		"fallback": "reicon:heart-pulse2-filled",
	});
}

export default Component;
