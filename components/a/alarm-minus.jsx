import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-3swvbxo.css';
import '../../css/q/qtmq76bec.css';
import '../../css/y/yitfupouv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="a-3swvbxo"/><circle class="qtmq76bec"/><path class="yitfupouv"/></g>`,
		"fallback": "andrsrxn:alarm-minus",
	});
}

export default Component;
