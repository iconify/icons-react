import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x87tb4xan.css';
import '../../css/t/tohfwjs2k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x87tb4xan"/><path class="tohfwjs2k"/></g>`,
		"fallback": "codicon:git-pull-request-go-to-changes",
	});
}

export default Component;
