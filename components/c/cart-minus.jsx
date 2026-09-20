import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hks7gjbis.css';
import '../../css/z/zsf5lvo7h.css';
import '../../css/w/w9p3ambxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hks7gjbis"/><path class="zsf5lvo7h"/><path clip-rule="evenodd" class="w9p3ambxu"/></g>`,
		"fallback": "reicon:cart-minus",
	});
}

export default Component;
