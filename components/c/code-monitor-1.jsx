import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w5f8l8bse.css';
import '../../css/p/p49bt2bzw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w5f8l8bse"/><path class="p49bt2bzw"/></g>`,
		"fallback": "streamline:code-monitor-1",
	});
}

export default Component;
