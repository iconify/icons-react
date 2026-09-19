import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gr5w9ub5c.css';
import '../../css/d/dm112-ppa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gr5w9ub5c"/><path class="dm112-ppa"/></g>`,
		"fallback": "bi:file-earmark-image-fill",
	});
}

export default Component;
