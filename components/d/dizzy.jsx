import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8o025bvy.css';
import '../../css/x/xmbv1lser.css';
import '../../css/q/qc4q2o3mb.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/v/v3wlrwo_l.css';
import '../../css/o/oz7n92_8r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8o025bvy"/><path class="xmbv1lser"/><path class="qc4q2o3mb"/><g class="ij2x_72vy"><path class="v3wlrwo_l"/><path class="oz7n92_8r"/></g>`,
		"fallback": "openmoji:dizzy",
	});
}

export default Component;
