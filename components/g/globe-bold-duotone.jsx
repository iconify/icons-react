import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/as6_xp3_v.css';
import '../../css/m/mxvtch9hs.css';
import '../../css/e/ec91lg3uo.css';
import '../../css/c/c66wu4b9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="as6_xp3_v"/><path class="mxvtch9hs"/><path class="ec91lg3uo"/><path class="c66wu4b9m"/></g>`,
		"fallback": "solar:globe-bold-duotone",
	});
}

export default Component;
