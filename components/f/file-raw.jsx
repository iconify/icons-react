import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ozlq469-s.css';
import '../../css/t/teskady_f.css';
import '../../css/f/f4542eajd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ozlq469-s"/><path class="teskady_f"/><path class="f4542eajd"/></g>`,
		"fallback": "andrsrxn:file-raw",
	});
}

export default Component;
