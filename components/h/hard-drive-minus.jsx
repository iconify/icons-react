import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e67yunbni.css';
import '../../css/c/cxw7wofud.css';
import '../../css/r/ry05lut2b.css';
import '../../css/g/gtyghabrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e67yunbni"/><path class="cxw7wofud"/><path class="ry05lut2b"/><path class="gtyghabrv"/></g>`,
		"fallback": "andrsrxn:hard-drive-minus",
	});
}

export default Component;
