import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/j/j4v5knxow.css';
import '../../css/k/k7kym8lkn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="j4v5knxow"/><path class="k7kym8lkn"/></g>`,
		"fallback": "doodle-icons:autumn-tree",
	});
}

export default Component;
