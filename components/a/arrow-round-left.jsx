import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
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
		"content": `<g class="y9tr6bcfx"><path class="l9ys1q0yl"/><path class="zk3nxfb9f"/></g>`,
		"fallback": "streamline:arrow-round-left",
	});
}

export default Component;
