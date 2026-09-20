import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_9fc8v9h.css';
import '../../css/h/h0hl8927f.css';
import '../../css/z/zqcbadvgz.css';
import '../../css/y/y-f3avbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i_9fc8v9h"/><path class="h0hl8927f"/><path class="zqcbadvgz"/><path class="y-f3avbmg"/></g>`,
		"fallback": "tdesign:corn",
	});
}

export default Component;
