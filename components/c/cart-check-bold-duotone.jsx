import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihi5mdelv.css';
import '../../css/t/t4yyzh38i.css';
import '../../css/i/izhbk9bxm.css';
import '../../css/v/v72n38vfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ihi5mdelv"/><path class="t4yyzh38i"/><path class="izhbk9bxm"/><path class="v72n38vfo"/></g>`,
		"fallback": "solar:cart-check-bold-duotone",
	});
}

export default Component;
