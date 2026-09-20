import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k1h794bfq.css';
import '../../css/n/n03kcz9zz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k1h794bfq"/><path clip-rule="evenodd" class="n03kcz9zz"/></g>`,
		"fallback": "reicon:battery-half",
	});
}

export default Component;
