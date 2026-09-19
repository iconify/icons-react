import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/maro3oy9t.css';
import '../../css/o/o8ztr_b6o.css';
import '../../css/p/p3scq4boq.css';
import '../../css/e/eu06bhbry.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="maro3oy9t"/><path class="o8ztr_b6o"/><path clip-rule="evenodd" class="p3scq4boq"/><path class="eu06bhbry"/></g>`,
		"fallback": "pepicons:cart-print",
	});
}

export default Component;
