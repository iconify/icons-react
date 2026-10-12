import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7m93dboq.css';
import '../../css/a/ajbzltasn.css';
import '../../css/e/eor6kr9ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w7m93dboq"/><path class="ajbzltasn"/><path class="eor6kr9ab"/></g>`,
		"fallback": "andrsrxn:hard-drive",
	});
}

export default Component;
