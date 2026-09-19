import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oe6bfxb7t.css';
import '../../css/m/mn9xsmb1m.css';
import '../../css/g/gx8eccbvd.css';
import '../../css/w/w_mefqbay.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oe6bfxb7t"/><path class="mn9xsmb1m"/><path class="gx8eccbvd"/><path class="w_mefqbay"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-with-peeking-eye",
	});
}

export default Component;
