import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhqze7b8h.css';
import '../../css/r/r-_op_s0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hhqze7b8h"/><path class="r-_op_s0r"/></g>`,
		"fallback": "andrsrxn:barcode-scan",
	});
}

export default Component;
