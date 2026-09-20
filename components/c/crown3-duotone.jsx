import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcyp11jcj.css';
import '../../css/t/t_dk7fb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fcyp11jcj"/><path class="t_dk7fb8y"/></g>`,
		"fallback": "reicon:crown3-duotone",
	});
}

export default Component;
