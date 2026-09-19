import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ehh2s2b3d.css';
import '../../css/m/mrjuy2kcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ehh2s2b3d"/><path class="mrjuy2kcc"/></g>`,
		"fallback": "hugeicons:hierarchy-square-04",
	});
}

export default Component;
