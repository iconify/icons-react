import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zk30habcz.css';
import '../../css/c/cpiybhjvi.css';
import '../../css/h/h_d-05drd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zk30habcz"/><path class="cpiybhjvi"/><path class="h_d-05drd"/></g>`,
		"fallback": "andrsrxn:background-gradient",
	});
}

export default Component;
