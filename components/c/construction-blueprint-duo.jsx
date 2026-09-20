import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0yalr5ir.css';
import '../../css/w/w-d6ioleq.css';
import '../../css/y/ysumzp_0y.css';
import '../../css/r/rsa-60bui.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i0yalr5ir"/><path class="w-d6ioleq"/><path class="ysumzp_0y"/><path class="rsa-60bui"/></g>`,
		"fallback": "streamline-kameleon-color:construction-blueprint-duo",
	});
}

export default Component;
