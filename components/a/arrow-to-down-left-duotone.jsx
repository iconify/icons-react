import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/snwuo2b4w.css';
import '../../css/p/ptxpf7bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="snwuo2b4w"/><path class="ptxpf7bvn"/></g>`,
		"fallback": "reicon:arrow-to-down-left-duotone",
	});
}

export default Component;
