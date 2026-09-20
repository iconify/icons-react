import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aer7twmtl.css';
import '../../css/t/tajbc-bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="aer7twmtl"/><path class="tajbc-bob"/></g>`,
		"fallback": "reicon:cart-shopping-filled",
	});
}

export default Component;
