import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/ccc_epgpq.css';
import '../../css/x/xt5dz1bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ccc_epgpq"/><path class="xt5dz1bkr"/></g>`,
		"fallback": "hugeicons:folder-export",
	});
}

export default Component;
