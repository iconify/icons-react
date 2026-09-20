import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y3rcump_k.css';
import '../../css/r/rbmb9m21o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y3rcump_k"/><path clip-rule="evenodd" class="rbmb9m21o"/></g>`,
		"fallback": "nrk:info-circle",
	});
}

export default Component;
