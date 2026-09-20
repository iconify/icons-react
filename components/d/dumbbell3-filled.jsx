import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ahn38snrw.css';
import '../../css/j/j41t80b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ahn38snrw"/><path clip-rule="evenodd" class="j41t80b-i"/></g>`,
		"fallback": "reicon:dumbbell3-filled",
	});
}

export default Component;
