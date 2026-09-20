import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ymovc7j9m.css';
import '../../css/v/vrj59qcoz.css';
import '../../css/c/cc53t4bin.css';
import '../../css/b/bsq_v5_ec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ymovc7j9m"/><path class="vrj59qcoz"/><path class="cc53t4bin"/><path class="bsq_v5_ec"/></g>`,
		"fallback": "solar:chat-dots-outline",
	});
}

export default Component;
