import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4_vrm0lk.css';
import '../../css/f/f7hp6ub0o.css';
import '../../css/e/e1bwoaccw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b4_vrm0lk"/><path class="f7hp6ub0o"/><path class="e1bwoaccw"/></g>`,
		"fallback": "reicon:envelope-right-filled",
	});
}

export default Component;
