import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l9-jkhgil.css';
import '../../css/t/te_2wyv7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l9-jkhgil"/><path clip-rule="evenodd" class="te_2wyv7c"/></g>`,
		"fallback": "reicon:flip-v-duotone",
	});
}

export default Component;
