import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gafy37gmj.css';
import '../../css/s/sjlz8xm0b.css';
import '../../css/r/ri_ieprmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gafy37gmj"/><path clip-rule="evenodd" class="sjlz8xm0b"/><path clip-rule="evenodd" class="ri_ieprmq"/></g>`,
		"fallback": "solar:card-transfer-bold",
	});
}

export default Component;
