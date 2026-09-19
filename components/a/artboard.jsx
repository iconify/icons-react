import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kf0ymebzp.css';
import '../../css/n/nmwgn4b4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kf0ymebzp"/><path class="nmwgn4b4u"/></g>`,
		"fallback": "hugeicons:artboard",
	});
}

export default Component;
