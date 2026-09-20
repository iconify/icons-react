import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jqcn6nbje.css';
import '../../css/f/f-dvbobck.css';
import '../../css/a/amkt4i8-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jqcn6nbje"/><path clip-rule="evenodd" class="f-dvbobck"/><path class="amkt4i8-i"/></g>`,
		"fallback": "reicon:bottle-duotone",
	});
}

export default Component;
