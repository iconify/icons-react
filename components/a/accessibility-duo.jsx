import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue-y_qbxn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v1ov_2b_c.css';
import '../../css/x/xirk37stl.css';
import '../../css/a/ab8gjdsma.css';
import '../../css/q/qzwmmk9uh.css';
import '../../css/f/ffy85mbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ue-y_qbxn"/><g class="dt0cm9dhy primary"><path class="v1ov_2b_c"/><path class="xirk37stl"/><path class="ab8gjdsma"/><path class="qzwmmk9uh"/><path class="ffy85mbaz"/></g>`,
		"fallback": "iconaut:accessibility-duo",
	});
}

export default Component;
