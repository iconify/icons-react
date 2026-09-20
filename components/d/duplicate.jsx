import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah0t1lfzm.css';
import '../../css/u/ueiqpgber.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/zxfhicblf.css';
import '../../css/o/o_fcpcc1g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah0t1lfzm"/><path class="ueiqpgber"/><g class="ij2x_72vy"><path class="zxfhicblf"/><path class="o_fcpcc1g"/></g>`,
		"fallback": "openmoji:duplicate",
	});
}

export default Component;
