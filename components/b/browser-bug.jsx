import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mua0n5teg.css';
import '../../css/z/znxqaccdm.css';
import '../../css/q/qho-7sb3x.css';
import '../../css/v/vxu1yn-dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mua0n5teg"/><path class="znxqaccdm"/><path class="qho-7sb3x"/><path class="vxu1yn-dw"/></g>`,
		"fallback": "andrsrxn:browser-bug",
	});
}

export default Component;
