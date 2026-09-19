import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rytwgub4z.css';
import '../../css/g/guewfbcxi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rytwgub4z"/><path class="guewfbcxi"/></g>`,
		"fallback": "codicon:git-pull-request-new-changes",
	});
}

export default Component;
