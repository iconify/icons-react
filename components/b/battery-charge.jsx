import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n4-lsmbfe.css';
import '../../css/r/rnb_z_b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n4-lsmbfe"/><path clip-rule="evenodd" class="rnb_z_b1j"/></g>`,
		"fallback": "reicon:battery-charge",
	});
}

export default Component;
