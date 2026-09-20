import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1aff5b5g.css';
import '../../css/u/userdbc1q.css';
import '../../css/j/jz_4-d7xn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n1aff5b5g"/><path class="userdbc1q"/><path class="jz_4-d7xn"/></g>`,
		"fallback": "solar:bag-heart-bold-duotone",
	});
}

export default Component;
