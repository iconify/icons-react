import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l88-ufbdx.css';
import '../../css/c/c_879rbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l88-ufbdx"/><path class="c_879rbds"/></g>`,
		"fallback": "reicon:envelope-open-duotone",
	});
}

export default Component;
