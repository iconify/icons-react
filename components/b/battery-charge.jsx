import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dp1i03b6i.css';
import '../../css/q/qwoi0oksk.css';
import '../../css/c/cdwrhdcqt.css';
import '../../css/z/z9thu7bwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dp1i03b6i"/><path class="qwoi0oksk"/><path class="cdwrhdcqt"/><path class="z9thu7bwc"/></g>`,
		"fallback": "icon-park:battery-charge",
	});
}

export default Component;
