import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s8qdqwbpf.css';
import '../../css/k/k--t14bqe.css';
import '../../css/j/ju5sn7ofc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s8qdqwbpf"/><path clip-rule="evenodd" class="k--t14bqe"/><path clip-rule="evenodd" class="ju5sn7ofc"/></g>`,
		"fallback": "reicon:card-transfer-filled",
	});
}

export default Component;
