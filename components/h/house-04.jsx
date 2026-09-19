import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cc-uymnfm.css';
import '../../css/d/djg_lkhxc.css';
import '../../css/c/cvrj5xban.css';
import '../../css/w/wswjvjhxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cc-uymnfm"/><ellipse class="djg_lkhxc"/><path class="cvrj5xban"/><path class="wswjvjhxc"/></g>`,
		"fallback": "hugeicons:house-04",
	});
}

export default Component;
