import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j9mdqgbbk.css';
import '../../css/x/xqv5q937w.css';
import '../../css/q/q1m8f__ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j9mdqgbbk"/><path class="xqv5q937w"/><path class="q1m8f__ky"/></g>`,
		"fallback": "mynaui:flame-kindling",
	});
}

export default Component;
