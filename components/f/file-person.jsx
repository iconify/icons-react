import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b27-1bcbp.css';
import '../../css/v/v4b3jubvt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b27-1bcbp"/><path class="v4b3jubvt"/></g>`,
		"fallback": "bi:file-person",
	});
}

export default Component;
