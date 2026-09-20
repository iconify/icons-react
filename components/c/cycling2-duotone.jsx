import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x_gvibbaj.css';
import '../../css/o/o6p246bcx.css';
import '../../css/n/nvhzykbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x_gvibbaj"/><path clip-rule="evenodd" class="o6p246bcx"/><path clip-rule="evenodd" class="nvhzykbnd"/></g>`,
		"fallback": "reicon:cycling2-duotone",
	});
}

export default Component;
