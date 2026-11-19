import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j139cfbaq.css';
import '../../css/c/cdl-x_lmo.css';
import '../../css/z/zbeat-bpl.css';
import '../../css/c/cjzvwubng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j139cfbaq"/><path class="cdl-x_lmo"/><path clip-rule="evenodd" class="zbeat-bpl"/><path class="cjzvwubng"/></g>`,
		"fallback": "andrsrxn:field-edit",
	});
}

export default Component;
