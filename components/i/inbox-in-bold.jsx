import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzoq96-nb.css';
import '../../css/q/qj2_vhona.css';
import '../../css/u/udg6cet5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vzoq96-nb"/><path class="qj2_vhona"/><path class="udg6cet5g"/></g>`,
		"fallback": "solar:inbox-in-bold",
	});
}

export default Component;
