import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g528lbb8m.css';
import '../../css/x/xsnx6db8b.css';
import '../../css/p/pskxq8kjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g528lbb8m"/><path class="xsnx6db8b"/><path class="pskxq8kjn"/></g>`,
		"fallback": "hugeicons:drag-left-03",
	});
}

export default Component;
