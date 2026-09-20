import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q9m10z9mv.css';
import '../../css/x/x8l63nn9u.css';
import '../../css/z/z5x0vkblk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q9m10z9mv"/><path clip-rule="evenodd" class="x8l63nn9u"/><path class="z5x0vkblk"/></g>`,
		"fallback": "streamline-color:bug-flat",
	});
}

export default Component;
