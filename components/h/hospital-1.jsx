import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2f8b2rvm.css';
import '../../css/k/k_wh-tamw.css';
import '../../css/q/qu42ndbsv.css';
import '../../css/q/qcj86obbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d2f8b2rvm"/><path class="k_wh-tamw"/><path class="qu42ndbsv"/><path class="qcj86obbh"/></g>`,
		"fallback": "tdesign:hospital-1",
	});
}

export default Component;
