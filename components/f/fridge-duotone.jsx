import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u5bv9rbda.css';
import '../../css/p/pt1kf0bik.css';
import '../../css/c/cdt14qbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u5bv9rbda"/><path class="pt1kf0bik"/><path class="cdt14qbmu"/></g>`,
		"fallback": "reicon:fridge-duotone",
	});
}

export default Component;
