import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x4f1in-9g.css';
import '../../css/z/zz96nnb4j.css';
import '../../css/b/bf3duhbgn.css';
import '../../css/q/qnoze7b4k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="x4f1in-9g"/><path class="zz96nnb4j"/><path class="bf3duhbgn"/><path class="qnoze7b4k"/></g>`,
		"fallback": "streamline-plump-color:calendar-mark",
	});
}

export default Component;
