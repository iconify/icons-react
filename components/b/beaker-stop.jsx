import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f5e0k7bvw.css';
import '../../css/s/ss3d2b4eq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f5e0k7bvw"/><path class="ss3d2b4eq"/></g>`,
		"fallback": "codicon:beaker-stop",
	});
}

export default Component;
