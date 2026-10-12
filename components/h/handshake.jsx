import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m17jzccch.css';
import '../../css/p/p_myk5bgm.css';
import '../../css/o/ob1k5lbpt.css';
import '../../css/f/fhjmig3kr.css';
import '../../css/x/x2u6iwlxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m17jzccch"/><path class="p_myk5bgm"/><path class="ob1k5lbpt"/><path class="fhjmig3kr"/><path class="x2u6iwlxl"/></g>`,
		"fallback": "andrsrxn:handshake",
	});
}

export default Component;
