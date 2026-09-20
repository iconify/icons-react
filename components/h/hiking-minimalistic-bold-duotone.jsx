import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/flsjjbbyo.css';
import '../../css/o/otya63-fh.css';
import '../../css/s/snjugrb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="flsjjbbyo"/><path clip-rule="evenodd" class="otya63-fh"/><path class="snjugrb5t"/></g>`,
		"fallback": "solar:hiking-minimalistic-bold-duotone",
	});
}

export default Component;
