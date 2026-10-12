import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgx_xqrxm.css';
import '../../css/s/s4u4mwd8i.css';
import '../../css/z/z1x1i436g.css';
import '../../css/y/y8k1p8bke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wgx_xqrxm"/><path class="s4u4mwd8i"/><path class="z1x1i436g"/><path class="y8k1p8bke"/></g>`,
		"fallback": "andrsrxn:compass",
	});
}

export default Component;
