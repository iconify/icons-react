import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z30ovoi1m.css';
import '../../css/k/koc0qqbys.css';
import '../../css/r/r-meexb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z30ovoi1m"/><path class="koc0qqbys"/><path clip-rule="evenodd" class="r-meexb3m"/></g>`,
		"fallback": "solar:cart-5-outline",
	});
}

export default Component;
