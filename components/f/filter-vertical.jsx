import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e3ndp0rzk.css';
import '../../css/n/nzgt8vbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e3ndp0rzk"/><path class="nzgt8vbqq"/></g>`,
		"fallback": "hugeicons:filter-vertical",
	});
}

export default Component;
