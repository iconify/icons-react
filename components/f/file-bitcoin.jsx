import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/phqllkbbt.css';
import '../../css/y/yp4dgwzus.css';
import '../../css/r/rl4zu8qob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="phqllkbbt"/><path class="yp4dgwzus"/><path class="rl4zu8qob"/></g>`,
		"fallback": "hugeicons:file-bitcoin",
	});
}

export default Component;
