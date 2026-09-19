import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f41w83s2w.css';
import '../../css/r/rl4zu8qob.css';
import '../../css/e/ehx0rebpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f41w83s2w"/><path class="rl4zu8qob"/><path class="ehx0rebpk"/></g>`,
		"fallback": "hugeicons:file-euro",
	});
}

export default Component;
