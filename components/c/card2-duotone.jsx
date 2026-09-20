import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k5lvgfumw.css';
import '../../css/f/fhca1iukl.css';
import '../../css/s/snz2-0xxd.css';
import '../../css/u/uped8l_dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k5lvgfumw"/><path class="fhca1iukl"/><path clip-rule="evenodd" class="snz2-0xxd"/><path class="uped8l_dw"/></g>`,
		"fallback": "reicon:card2-duotone",
	});
}

export default Component;
