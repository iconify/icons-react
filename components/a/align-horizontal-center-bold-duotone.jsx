import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lucugkbpw.css';
import '../../css/d/dvhsvcb-v.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/e/ezz1s8b2f.css';
import '../../css/d/dba7q3bhb.css';
import '../../css/z/zxds2l2_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lucugkbpw"/><path class="dvhsvcb-v"/><g class="xtpeb-edw"><path class="ezz1s8b2f"/><path class="dba7q3bhb"/><path class="zxds2l2_n"/></g>`,
		"fallback": "solar:align-horizontal-center-bold-duotone",
	});
}

export default Component;
