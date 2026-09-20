import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzbvxs3ju.css';
import '../../css/x/x4i3-lbjr.css';
import '../../css/t/trbzr7ctk.css';
import '../../css/d/dfpcsmz2q.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/f9aewmrnj.css';
import '../../css/l/lus50ylyj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzbvxs3ju"/><path class="x4i3-lbjr"/><path class="trbzr7ctk"/><path class="dfpcsmz2q"/><g class="jn8qy4bru"><path class="f9aewmrnj"/><path class="lus50ylyj"/></g>`,
		"fallback": "openmoji:champignon-brown",
	});
}

export default Component;
