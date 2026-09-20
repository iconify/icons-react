import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytoi-bjfp.css';
import '../../css/b/b1obiybby.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ytoi-bjfp"/><path class="b1obiybby"/></g>`,
		"fallback": "streamline-flex-color:fried-egg-breakfast-flat",
	});
}

export default Component;
