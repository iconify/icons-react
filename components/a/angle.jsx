import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/g/g7agmsbue.css';
import '../../css/z/zqmh3wbjj.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="g7agmsbue"/><path class="zqmh3wbjj"/></g>`,
		"fallback": "system-uicons:angle",
	});
}

export default Component;
