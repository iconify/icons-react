import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vwlxb6r1q.css';
import '../../css/i/irjtrsb0s.css';
import '../../css/l/lrijypbor.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vwlxb6r1q"/><path class="irjtrsb0s"/><path class="lrijypbor"/></g>`,
		"fallback": "fluent-emoji-high-contrast:graduation-cap",
	});
}

export default Component;
