import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/l/l9ys1q0yl.css';
import '../../css/z/zk3nxfb9f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="l9ys1q0yl"/><path class="zk3nxfb9f"/></g>`,
		"fallback": "streamline-color:arrow-round-left",
	});
}

export default Component;
