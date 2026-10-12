import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxmlv4suc.css';
import '../../css/t/t8gf8q6tr.css';
import '../../css/d/de2zhsbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mxmlv4suc"/><path class="t8gf8q6tr"/><path class="de2zhsbdv"/></g>`,
		"fallback": "andrsrxn:file",
	});
}

export default Component;
