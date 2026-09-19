import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dr-lmjbud.css';
import '../../css/l/lsl7qwgdg.css';
import '../../css/g/gzr2x4p5b.css';
import '../../css/w/w1nca4blz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dr-lmjbud"/><path class="lsl7qwgdg"/><path clip-rule="evenodd" class="gzr2x4p5b"/><path class="w1nca4blz"/></g>`,
		"fallback": "healthicons:agriculture-worker",
	});
}

export default Component;
