import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9n8z28mx.css';
import '../../css/p/pab997bkl.css';
import '../../css/i/iko852rpv.css';
import '../../css/n/no_ar1xgm.css';
import '../../css/f/f-xbn9b5q.css';
import '../../css/z/zo1om_j7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k9n8z28mx"/><path class="pab997bkl"/><path class="iko852rpv"/><path class="no_ar1xgm"/><path class="f-xbn9b5q"/><path class="zo1om_j7i"/></g>`,
		"fallback": "streamline-ultimate-color:folder-add",
	});
}

export default Component;
