import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xxy4eau_a.css';
import '../../css/u/uujgzzyfl.css';
import '../../css/q/qx_8t3ziy.css';
import '../../css/w/w0qi_bgas.css';
import '../../css/g/g3n75obfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xxy4eau_a"/><path class="uujgzzyfl wm-shadow"/><path class="qx_8t3ziy"/><path class="w0qi_bgas"/><path class="g3n75obfy"/></g>`,
		"fallback": "withicons-brutal:file-pdf",
	});
}

export default Component;
