import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n272b9sbz.css';
import '../../css/m/mz0daj6xh.css';
import '../../css/r/reh7ysb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n272b9sbz"/><path class="mz0daj6xh"/><path class="reh7ysb-h"/></g>`,
		"fallback": "andrsrxn:gramophone",
	});
}

export default Component;
