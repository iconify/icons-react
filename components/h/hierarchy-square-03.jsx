import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dzjzqzp_p.css';
import '../../css/k/kxe36xeye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dzjzqzp_p"/><path class="kxe36xeye"/></g>`,
		"fallback": "hugeicons:hierarchy-square-03",
	});
}

export default Component;
