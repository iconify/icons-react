import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp1h0obrt.css';
import '../../css/v/vzkxx9bqo.css';
import '../../css/y/y0o_wjb9g.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/hguu3elqp.css';
import '../../css/w/w9__0lb3x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp1h0obrt"/><path class="vzkxx9bqo"/><path class="y0o_wjb9g"/><g class="jn8qy4bru"><path class="hguu3elqp"/><path class="w9__0lb3x"/></g>`,
		"fallback": "openmoji:hiking-boot",
	});
}

export default Component;
