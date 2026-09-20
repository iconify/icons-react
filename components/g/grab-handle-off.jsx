import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g036a6b7n.css';
import '../../css/q/qayzh3b3v.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g036a6b7n"/><path class="qayzh3b3v"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:grab-handle-off",
	});
}

export default Component;
