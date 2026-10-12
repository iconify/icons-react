import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lmz-t6bds.css';
import '../../css/y/y8p7i1bbp.css';
import '../../css/h/h52hszbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lmz-t6bds"/><path class="y8p7i1bbp"/><path class="h52hszbur"/></g>`,
		"fallback": "andrsrxn:file-sparkle",
	});
}

export default Component;
