import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3wa4wx_v.css';
import '../../css/z/z_n36--0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o3wa4wx_v"/><path class="z_n36--0e"/></g>`,
		"fallback": "andrsrxn:cactus-desert",
	});
}

export default Component;
