import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjnap5mog.css';
import '../../css/u/uazu3ybua.css';
import '../../css/b/bxma9mfut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wjnap5mog"/><path class="uazu3ybua"/><path class="bxma9mfut"/></g>`,
		"fallback": "hugeicons:clipboard-pen",
	});
}

export default Component;
