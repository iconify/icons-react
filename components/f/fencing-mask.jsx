import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kja1csyru.css';
import '../../css/i/iccwmd-ii.css';
import '../../css/u/u4cf97b6d.css';
import '../../css/v/vl8xitbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="kja1csyru"/><path class="iccwmd-ii"/><path class="u4cf97b6d"/><path class="vl8xitbig"/></g>`,
		"fallback": "hugeicons:fencing-mask",
	});
}

export default Component;
