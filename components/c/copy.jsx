import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/y/y49qhzb8j.css';
import '../../css/z/zqqu-xq9s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="y49qhzb8j"/><path class="zqqu-xq9s"/></g>`,
		"fallback": "doodle-icons:copy",
	});
}

export default Component;
