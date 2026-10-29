import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x-i5-k7eh.css';
import '../../css/z/zmn0zvbqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="x-i5-k7eh"/><path class="wm-a zmn0zvbqa"/></g>`,
		"fallback": "withicons:eraser-solid",
	});
}

export default Component;
