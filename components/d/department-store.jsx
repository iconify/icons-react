import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/skphx_bpf.css';
import '../../css/o/onn_d758l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="skphx_bpf"/><path class="onn_d758l"/></g>`,
		"fallback": "fluent-emoji-high-contrast:department-store",
	});
}

export default Component;
