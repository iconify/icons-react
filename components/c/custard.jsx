import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfrlzyb-u.css';
import '../../css/q/q1ou_bnzh.css';
import '../../css/g/gy1gis3la.css';
import '../../css/k/kjiy61bvv.css';
import '../../css/v/vm_cohbnp.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/ow5hw0bji.css';
import '../../css/w/wlo6ihzyu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfrlzyb-u"/><path class="q1ou_bnzh"/><path class="gy1gis3la"/><path class="kjiy61bvv"/><path class="vm_cohbnp"/><g class="jn8qy4bru"><path class="ow5hw0bji"/><path class="wlo6ihzyu"/></g>`,
		"fallback": "openmoji:custard",
	});
}

export default Component;
