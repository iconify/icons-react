import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a2pqnabsm.css';
import '../../css/o/o7_zbclrn.css';
import '../../css/t/tjq12i1zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a2pqnabsm"/><path clip-rule="evenodd" class="o7_zbclrn"/><path class="tjq12i1zh"/></g>`,
		"fallback": "reicon:circle-bottom-down-filled",
	});
}

export default Component;
