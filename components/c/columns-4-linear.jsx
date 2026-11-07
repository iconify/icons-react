import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ojv2i-bxi.css';
import '../../css/z/zv_roib3z.css';
import '../../css/h/hg3jlpbvn.css';
import '../../css/l/lt87iveio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ojv2i-bxi"/><path class="zv_roib3z"/><path class="hg3jlpbvn"/><path class="lt87iveio"/></g>`,
		"fallback": "solar:columns-4-linear",
	});
}

export default Component;
