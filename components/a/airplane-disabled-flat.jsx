import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wvg3qvr3i.css';
import '../../css/o/ornw21hhd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wvg3qvr3i"/><path clip-rule="evenodd" class="ornw21hhd"/></g>`,
		"fallback": "streamline-plump-color:airplane-disabled-flat",
	});
}

export default Component;
