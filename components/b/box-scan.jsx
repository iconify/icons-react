import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-jv-4byn.css';
import '../../css/b/b0bi3dl7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q-jv-4byn"/><path clip-rule="evenodd" class="b0bi3dl7v"/></g>`,
		"fallback": "andrsrxn:box-scan",
	});
}

export default Component;
