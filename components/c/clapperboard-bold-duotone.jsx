import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z5z4rnbzy.css';
import '../../css/h/h1ftphbzx.css';
import '../../css/v/vai_yebix.css';
import '../../css/u/up558kbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z5z4rnbzy"/><path class="h1ftphbzx"/><path class="vai_yebix"/><path class="up558kbnc"/></g>`,
		"fallback": "solar:clapperboard-bold-duotone",
	});
}

export default Component;
