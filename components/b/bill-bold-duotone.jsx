import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/io2mm3b4i.css';
import '../../css/d/dfep9nb_v.css';
import '../../css/u/ug1uowu6z.css';
import '../../css/h/hbb908j_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="io2mm3b4i"/><path class="dfep9nb_v"/><path class="ug1uowu6z"/><path class="hbb908j_v"/></g>`,
		"fallback": "solar:bill-bold-duotone",
	});
}

export default Component;
