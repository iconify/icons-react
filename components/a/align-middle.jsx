import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pzpb1jbov.css';
import '../../css/e/ehv-igtvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pzpb1jbov"/><path class="ehv-igtvd"/></g>`,
		"fallback": "gg:align-middle",
	});
}

export default Component;
