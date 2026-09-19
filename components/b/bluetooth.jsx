import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/otl40_bpg.css';
import '../../css/s/svpx09b4p.css';
import '../../css/m/mcfcap6wp.css';
import '../../css/x/x7y_i-f5u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="otl40_bpg"/><path clip-rule="evenodd" class="svpx09b4p"/><path class="mcfcap6wp"/><path class="x7y_i-f5u"/></g>`,
		"fallback": "pepicons:bluetooth",
	});
}

export default Component;
