import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z_qympb-a.css';
import '../../css/l/llopv5_ap.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z_qympb-a"/><path class="llopv5_ap"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bottle-with-popping-cork",
	});
}

export default Component;
