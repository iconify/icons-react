import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dobl-nbbl.css';
import '../../css/d/ddipbdbdu.css';
import '../../css/w/w083gzbra.css';
import '../../css/y/ya_55rppu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dobl-nbbl"/><path class="ddipbdbdu"/><path class="w083gzbra"/><path clip-rule="evenodd" class="ya_55rppu"/></g>`,
		"fallback": "solar:file-braces-bold-duotone",
	});
}

export default Component;
