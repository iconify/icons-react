import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/je8bxq6sx.css';
import '../../css/j/jxv58xbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="je8bxq6sx"/><path clip-rule="evenodd" class="jxv58xbty"/></g>`,
		"fallback": "lets-icons:done-all-alt-round",
	});
}

export default Component;
