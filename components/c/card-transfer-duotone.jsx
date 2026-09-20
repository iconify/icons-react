import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_xaqqbil.css';
import '../../css/s/sc7-ghswd.css';
import '../../css/k/krqi87b4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e_xaqqbil"/><path class="sc7-ghswd"/><path clip-rule="evenodd" class="krqi87b4h"/></g>`,
		"fallback": "reicon:card-transfer-duotone",
	});
}

export default Component;
