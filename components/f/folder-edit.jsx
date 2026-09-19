import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lc-kr-ega.css';
import '../../css/l/lsv8_vxxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lc-kr-ega"/><path class="lsv8_vxxt"/></g>`,
		"fallback": "hugeicons:folder-edit",
	});
}

export default Component;
