import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o2gi1z-2x.css';
import '../../css/z/z8b20vbir.css';
import '../../css/s/swxyxq2oi.css';
import '../../css/t/t7lq5vkcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o2gi1z-2x"/><path class="z8b20vbir"/><path clip-rule="evenodd" class="swxyxq2oi"/><path class="t7lq5vkcs"/></g>`,
		"fallback": "reicon:balls-filled",
	});
}

export default Component;
