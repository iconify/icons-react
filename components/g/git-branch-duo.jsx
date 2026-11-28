import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi8jkr2qh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wu990gbfq.css';
import '../../css/l/lmh0mebmw.css';
import '../../css/f/f5fxjbbmn.css';
import '../../css/p/pb8vlu4cs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xi8jkr2qh"/><g class="dt0cm9dhy primary"><path class="wu990gbfq"/><path class="lmh0mebmw"/><path class="f5fxjbbmn"/><path class="pb8vlu4cs"/></g>`,
		"fallback": "iconaut:git-branch-duo",
	});
}

export default Component;
