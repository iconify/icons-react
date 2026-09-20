import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nfctrxb9m.css';
import '../../css/i/ivzdjnbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nfctrxb9m"/><path clip-rule="evenodd" class="ivzdjnbcl"/></g>`,
		"fallback": "reicon:forward-5s-duotone",
	});
}

export default Component;
