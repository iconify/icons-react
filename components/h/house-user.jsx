import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zafs64dhu.css';
import '../../css/g/gsvrl7yuk.css';
import '../../css/n/n4s5kf6pg.css';
import '../../css/u/uvm5r2b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zafs64dhu"/><path class="gsvrl7yuk"/><path class="n4s5kf6pg"/><path class="uvm5r2b_h"/></g>`,
		"fallback": "andrsrxn:house-user",
	});
}

export default Component;
