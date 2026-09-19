import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d6t8f588p.css';
import '../../css/c/c-fq54bbq.css';
import '../../css/t/t2kold76n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d6t8f588p"/><path clip-rule="evenodd" class="c-fq54bbq"/><path class="t2kold76n"/></g>`,
		"fallback": "gg:coffee",
	});
}

export default Component;
