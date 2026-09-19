import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6x5n2gml.css';
import '../../css/w/wp-xmi3gk.css';
import '../../css/p/pp778nb5w.css';
import '../../css/l/li2gxfaww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t6x5n2gml"/><path class="wp-xmi3gk"/><path clip-rule="evenodd" class="pp778nb5w"/><path class="li2gxfaww"/></g>`,
		"fallback": "healthicons:crying2x-outline",
	});
}

export default Component;
