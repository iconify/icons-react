import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9g1uycax.css';
import '../../css/m/mie1t6b-r.css';
import '../../css/k/kqrp2fbsl.css';
import '../../css/j/j0jzcbbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r9g1uycax"/><path clip-rule="evenodd" class="mie1t6b-r"/><path class="kqrp2fbsl"/><path class="j0jzcbbwv"/></g>`,
		"fallback": "healthicons:eyeglasses-outline-24px",
	});
}

export default Component;
