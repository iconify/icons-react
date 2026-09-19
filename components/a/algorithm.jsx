import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/m9vtpl1ua.css';
import '../../css/h/h1l3ucb2g.css';
import '../../css/f/fjqjieb5u.css';
import '../../css/g/gpwwogbhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="m9vtpl1ua"/><path class="h1l3ucb2g"/><path class="fjqjieb5u"/><path class="gpwwogbhk"/></g>`,
		"fallback": "hugeicons:algorithm",
	});
}

export default Component;
