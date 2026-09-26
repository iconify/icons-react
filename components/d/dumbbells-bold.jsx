import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cfxvs4bkr.css';
import '../../css/r/r4jc7hbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cfxvs4bkr"/><path class="r4jc7hbnq"/></g>`,
		"fallback": "solar:dumbbells-bold",
	});
}

export default Component;
