import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mkih2u7bz.css';
import '../../css/e/eydo_ywvt.css';
import '../../css/n/nvhzykbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mkih2u7bz"/><path clip-rule="evenodd" class="eydo_ywvt"/><path clip-rule="evenodd" class="nvhzykbnd"/></g>`,
		"fallback": "reicon:cycling-duotone",
	});
}

export default Component;
