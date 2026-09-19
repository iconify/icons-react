import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mgkzaizgn.css';
import '../../css/b/b2hcnbbcd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mgkzaizgn"/><path class="b2hcnbbcd"/></g>`,
		"fallback": "codicon:combine",
	});
}

export default Component;
