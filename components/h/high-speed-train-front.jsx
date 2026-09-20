import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-7x1f-9f.css';
import '../../css/a/ae8qb6bze.css';
import '../../css/j/j8315xbot.css';
import '../../css/l/l6_74wb4w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h-7x1f-9f"/><path class="ae8qb6bze"/><path class="j8315xbot"/><path class="l6_74wb4w"/></g>`,
		"fallback": "streamline-flex-color:high-speed-train-front",
	});
}

export default Component;
