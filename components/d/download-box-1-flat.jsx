import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mibyxt_3y.css';
import '../../css/q/qg93e3bzh.css';
import '../../css/c/cmo9q1b6d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mibyxt_3y"/><path clip-rule="evenodd" class="qg93e3bzh"/><path clip-rule="evenodd" class="cmo9q1b6d"/></g>`,
		"fallback": "streamline-flex-color:download-box-1-flat",
	});
}

export default Component;
