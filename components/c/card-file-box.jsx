import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a156wwbbh.css';
import '../../css/z/z5uugrbua.css';
import '../../css/e/e3bkvs-zd.css';
import '../../css/b/bdv3fbcqn.css';
import '../../css/y/yr26vtego.css';
import '../../css/u/uq8505knq.css';
import '../../css/y/y_1b1juui.css';
import '../../css/c/cf8rcvbtb.css';
import '../../css/h/ham7nrbpz.css';
import '../../css/x/x31nn6-dl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a156wwbbh"/><path class="z5uugrbua"/><path class="e3bkvs-zd"/><path class="bdv3fbcqn"/><path class="yr26vtego"/><path class="uq8505knq"/><path class="y_1b1juui"/><path class="cf8rcvbtb"/><path class="ham7nrbpz"/><path class="x31nn6-dl"/></g>`,
		"fallback": "fluent-emoji-flat:card-file-box",
	});
}

export default Component;
