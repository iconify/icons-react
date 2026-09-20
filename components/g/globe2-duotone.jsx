import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/as6_xp3_v.css';
import '../../css/c/ciq1v2bio.css';
import '../../css/d/dup_gbchp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="as6_xp3_v"/><path class="ciq1v2bio"/><path clip-rule="evenodd" class="dup_gbchp"/></g>`,
		"fallback": "reicon:globe2-duotone",
	});
}

export default Component;
