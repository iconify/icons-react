import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a2kliubwi.css';
import '../../css/n/n7_idhb2y.css';
import '../../css/g/gri8csbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a2kliubwi"/><path clip-rule="evenodd" class="n7_idhb2y"/><path clip-rule="evenodd" class="gri8csbwd"/><path clip-rule="evenodd" class="n7_idhb2y"/></g>`,
		"fallback": "solar:house-bold",
	});
}

export default Component;
