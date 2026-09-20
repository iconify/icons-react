import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9n_9-b9e.css';
import '../../css/z/zhvmu9b_u.css';
import '../../css/o/osur64b6w.css';
import '../../css/w/w195kz00o.css';
import '../../css/y/yuhbhbg-h.css';
import '../../css/r/roombi3ku.css';

const viewBox = {"width":220,"height":220};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="u9n_9-b9e"><path clip-rule="evenodd" class="zhvmu9b_u"/><path clip-rule="evenodd" class="osur64b6w"/><path clip-rule="evenodd" class="w195kz00o"/><path class="yuhbhbg-h"/><path clip-rule="evenodd" class="roombi3ku"/></g>`,
		"fallback": "thesvg-color:effect-ts-light",
	});
}

export default Component;
