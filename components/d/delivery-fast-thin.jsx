import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgzv_db-v.css';
import '../../css/l/lwyjq4rkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wgzv_db-v"/><path class="lwyjq4rkm"/></g>`,
		"fallback": "iconamoon:delivery-fast-thin",
	});
}

export default Component;
