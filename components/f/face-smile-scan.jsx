import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vs4z_3ftf.css';
import '../../css/l/ln-bxcwys.css';
import '../../css/p/pdf-ob65e.css';
import '../../css/w/wsvws5b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vs4z_3ftf"/><path class="ln-bxcwys"/><path class="pdf-ob65e"/><path class="wsvws5b2y"/></g>`,
		"fallback": "andrsrxn:face-smile-scan",
	});
}

export default Component;
