import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dzc1y6b0m.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/y/yhkdl0bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dzc1y6b0m"/><circle class="shu3xdl9q"/><path class="yhkdl0bgf"/></g>`,
		"fallback": "hugeicons:ai-web-browsing",
	});
}

export default Component;
