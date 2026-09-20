import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sb2h3nloc.css';
import '../../css/l/l4sczfb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sb2h3nloc"/><path class="l4sczfb-d"/></g>`,
		"fallback": "reicon:circle-top-down-filled",
	});
}

export default Component;
