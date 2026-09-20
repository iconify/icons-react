import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dva_yacgj.css';
import '../../css/e/ej7mq2b7v.css';
import '../../css/m/mt47a00mi.css';
import '../../css/p/p519e9boa.css';
import '../../css/f/ferh-pbbl.css';
import '../../css/k/ky27fs-9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dva_yacgj"/><path class="ej7mq2b7v"/><path class="mt47a00mi"/><path class="p519e9boa"/><path class="ferh-pbbl"/><path class="ky27fs-9o"/></g>`,
		"fallback": "solar:gift-bold",
	});
}

export default Component;
