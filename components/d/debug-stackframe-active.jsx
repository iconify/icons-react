import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b-gt9_21o.css';
import '../../css/w/wgo9jkn8l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b-gt9_21o"/><path class="wgo9jkn8l"/></g>`,
		"fallback": "codicon:debug-stackframe-active",
	});
}

export default Component;
