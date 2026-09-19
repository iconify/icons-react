import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mnk_qpb6q.css';
import '../../css/z/z8s6s_bep.css';
import '../../css/r/rwyjc5fvx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mnk_qpb6q"/><path class="z8s6s_bep"/><path class="rwyjc5fvx"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-in-clouds",
	});
}

export default Component;
