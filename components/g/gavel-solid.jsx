import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/ki8rvvk-j.css';
import '../../css/l/lrncrhbcj.css';
import '../../css/p/pxd14elkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ki8rvvk-j"/><path class="lrncrhbcj wm-a"/><path class="pxd14elkk wm-s"/></g>`,
		"fallback": "withicons:gavel-solid",
	});
}

export default Component;
