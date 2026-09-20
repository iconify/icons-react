import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xgaf0nbdt.css';
import '../../css/r/r0knw1b4v.css';
import '../../css/n/n0kzgsfmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xgaf0nbdt"/><path class="r0knw1b4v"/><path class="n0kzgsfmm"/></g>`,
		"fallback": "keyline-icons:badge-percent-sharp",
	});
}

export default Component;
