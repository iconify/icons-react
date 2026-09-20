import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pmdp8m87h.css';
import '../../css/b/b89liv9bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pmdp8m87h"/><path clip-rule="evenodd" class="b89liv9bq"/></g>`,
		"fallback": "reicon:cart-large",
	});
}

export default Component;
