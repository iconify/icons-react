import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvq7m5bot.css';
import '../../css/a/ab3pflbvo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vvq7m5bot"/><path class="ab3pflbvo"/></g>`,
		"fallback": "rivet-icons:envelope-solid",
	});
}

export default Component;
