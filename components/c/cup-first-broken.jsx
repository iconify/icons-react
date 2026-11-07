import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/snb0d1t5g.css';
import '../../css/n/n30k0z4xd.css';
import '../../css/t/t7j-yfbxu.css';
import '../../css/e/ez__-jb1z.css';
import '../../css/f/f8xsbma3z.css';
import '../../css/t/tj46qnbna.css';
import '../../css/f/f52sbkbuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="snb0d1t5g"/><path class="n30k0z4xd"/><path class="t7j-yfbxu"/><path class="ez__-jb1z"/><path class="f8xsbma3z"/><path class="tj46qnbna"/><path class="f52sbkbuz"/></g>`,
		"fallback": "solar:cup-first-broken",
	});
}

export default Component;
