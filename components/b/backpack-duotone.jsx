import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/av7fa-bwd.css';
import '../../css/s/sjtbg53tv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="av7fa-bwd"/><path class="sjtbg53tv"/></g>`,
		"fallback": "reicon:backpack-duotone",
	});
}

export default Component;
