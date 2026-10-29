import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ax02kbzww.css';
import '../../css/z/zvmwgilcj.css';
import '../../css/d/dy87hz61h.css';
import '../../css/b/bcdke8buh.css';
import '../../css/c/c_5-x3brd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ax02kbzww"/><path class="zvmwgilcj"/><path class="dy87hz61h wm-a"/><path class="bcdke8buh"/><path class="c_5-x3brd wm-a"/></g>`,
		"fallback": "withicons:avatar-cat-duo",
	});
}

export default Component;
