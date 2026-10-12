import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dw2x-fupm.css';
import '../../css/d/dasjv602b.css';
import '../../css/g/g86yg3b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dw2x-fupm"/><path class="dasjv602b"/><path class="g86yg3b_o"/></g>`,
		"fallback": "andrsrxn:file-out",
	});
}

export default Component;
