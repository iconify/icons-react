import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kt1ahab5v.css';
import '../../css/a/adlaw-b6t.css';
import '../../css/o/onymejbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kt1ahab5v"/><path class="adlaw-b6t"/><path class="onymejbgu"/></g>`,
		"fallback": "solar:diskette-broken",
	});
}

export default Component;
