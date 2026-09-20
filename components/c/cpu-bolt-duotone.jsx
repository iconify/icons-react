import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b1w3jxbdi.css';
import '../../css/n/n3xmixbkr.css';
import '../../css/n/nvixmrbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b1w3jxbdi"/><path clip-rule="evenodd" class="n3xmixbkr"/><path class="nvixmrbwm"/></g>`,
		"fallback": "reicon:cpu-bolt-duotone",
	});
}

export default Component;
