import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wvp0l_-7y.css';
import '../../css/v/vzrehs4ha.css';
import '../../css/j/j3cn9rb9q.css';
import '../../css/y/ybspa3-1u.css';
import '../../css/x/xk_ljwbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco wvp0l_-7y"/><path class="vzrehs4ha wm-deco"/><path class="j3cn9rb9q wm-k"/><path class="wm-a ybspa3-1u"/><path class="wm-a xk_ljwbrd"/></g>`,
		"fallback": "withicons:binary-blueprint",
	});
}

export default Component;
