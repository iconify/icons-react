import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wia1a0bvt.css';
import '../../css/o/oskwsj0rk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wia1a0bvt"/><path class="oskwsj0rk"/></g>`,
		"fallback": "andrsrxn:box-measure",
	});
}

export default Component;
