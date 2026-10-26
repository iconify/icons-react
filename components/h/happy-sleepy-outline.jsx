import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ghdbiy5at.css';
import '../../css/r/r16iwvw8p.css';
import '../../css/i/i8yxkt2vg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ghdbiy5at"/><path clip-rule="evenodd" class="r16iwvw8p"/><path class="i8yxkt2vg"/></g>`,
		"fallback": "healthicons:happy-sleepy-outline",
	});
}

export default Component;
