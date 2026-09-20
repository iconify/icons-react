import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ggfdopbgt.css';
import '../../css/m/mu-gfmb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ggfdopbgt"/><path class="mu-gfmb-i"/></g>`,
		"fallback": "solar:bluetooth-bold-duotone",
	});
}

export default Component;
