import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/arsa-o3fn.css';
import '../../css/v/v5r45jbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="arsa-o3fn"/><path class="v5r45jbpa"/></g>`,
		"fallback": "reicon:filter-search-filled",
	});
}

export default Component;
