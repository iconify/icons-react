import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c1m5qubnu.css';
import '../../css/j/jj9dgh_2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c1m5qubnu"/><path class="jj9dgh_2r"/></g>`,
		"fallback": "reicon:hand-heart-duotone",
	});
}

export default Component;
