import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j86ku0oks.css';
import '../../css/x/xpwwbpbtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j86ku0oks"/><path class="xpwwbpbtk"/></g>`,
		"fallback": "iconoir:emoji-satisfied",
	});
}

export default Component;
