import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oezo6_b-v.css';
import '../../css/u/ubj2v4xxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oezo6_b-v"/><path class="ubj2v4xxd"/></g>`,
		"fallback": "reicon:eraser-filled",
	});
}

export default Component;
