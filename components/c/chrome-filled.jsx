import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a3i638fzo.css';
import '../../css/w/w28n6kz3w.css';
import '../../css/l/l7y0kwbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a3i638fzo"/><path class="w28n6kz3w"/><path class="l7y0kwbnm"/></g>`,
		"fallback": "reicon:chrome-filled",
	});
}

export default Component;
