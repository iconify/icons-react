import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/enx-ktbog.css';
import '../../css/q/qgwz25bbx.css';
import '../../css/n/njdzg2mjv.css';
import '../../css/c/ciz6c2b4s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="enx-ktbog"/><path class="qgwz25bbx"/><path class="njdzg2mjv"/><path class="ciz6c2b4s"/></g>`,
		"fallback": "streamline-color:blood-donate-drop",
	});
}

export default Component;
