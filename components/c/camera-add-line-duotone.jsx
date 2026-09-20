import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bvdn8gb_z.css';
import '../../css/z/zek-ufbop.css';
import '../../css/m/mw2j0bfon.css';
import '../../css/u/u4qnnrb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bvdn8gb_z"/><path class="zek-ufbop"/><path class="mw2j0bfon"/><path class="u4qnnrb5s"/></g>`,
		"fallback": "solar:camera-add-line-duotone",
	});
}

export default Component;
