import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x2dqpccdi.css';
import '../../css/i/i-32_ibva.css';
import '../../css/h/hzfv6ac4k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x2dqpccdi"/><path clip-rule="evenodd" class="i-32_ibva"/><path class="hzfv6ac4k"/></g>`,
		"fallback": "healthicons:contact-support2x-outline",
	});
}

export default Component;
