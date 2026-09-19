import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/avf_y7grk.css';
import '../../css/n/noq6hvbqw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="avf_y7grk"/><path class="noq6hvbqw"/></g>`,
		"fallback": "codicon:go-to-search",
	});
}

export default Component;
