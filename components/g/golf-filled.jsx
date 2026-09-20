import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i7n49ic5b.css';
import '../../css/e/e20wemfyj.css';
import '../../css/f/fa1egib0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i7n49ic5b"/><path class="e20wemfyj"/><path class="fa1egib0t"/></g>`,
		"fallback": "reicon:golf-filled",
	});
}

export default Component;
