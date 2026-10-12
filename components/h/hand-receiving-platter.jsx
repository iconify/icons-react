import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8ima-bjf.css';
import '../../css/l/lah8hxbem.css';
import '../../css/l/l--_qtb-g.css';
import '../../css/b/bh9-fnvuz.css';
import '../../css/z/z-vd8xb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="b8ima-bjf"/><path class="lah8hxbem"/><path class="l--_qtb-g"/><rect class="bh9-fnvuz"/><path class="z-vd8xb_r"/></g>`,
		"fallback": "andrsrxn:hand-receiving-platter",
	});
}

export default Component;
