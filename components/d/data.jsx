import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xndzohbvo.css';
import '../../css/k/ksfid5bzj.css';
import '../../css/q/qzd-ap50x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xndzohbvo"/><path class="ksfid5bzj"/><path class="qzd-ap50x"/></g>`,
		"fallback": "gg:data",
	});
}

export default Component;
