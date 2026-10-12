import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4qdxuizp.css';
import '../../css/w/we-7n0w6h.css';
import '../../css/g/g0an97a7m.css';
import '../../css/m/m4e0d_bbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c4qdxuizp"/><path class="we-7n0w6h"/><path class="g0an97a7m"/><circle transform="rotate(8.58 14.86 15.68)" class="m4e0d_bbw"/></g>`,
		"fallback": "andrsrxn:bacteria",
	});
}

export default Component;
