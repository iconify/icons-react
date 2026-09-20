import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0til8bxh.css';
import '../../css/s/s8qdqwbpf.css';
import '../../css/m/m0u-b0o0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p0til8bxh"/><path class="s8qdqwbpf"/><path clip-rule="evenodd" class="m0u-b0o0h"/></g>`,
		"fallback": "reicon:card-receive-filled",
	});
}

export default Component;
