import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e6oa9qzsv.css';
import '../../css/w/w7l898bvo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e6oa9qzsv"/><path class="w7l898bvo"/></g>`,
		"fallback": "streamline-flex:code-monitor-1",
	});
}

export default Component;
