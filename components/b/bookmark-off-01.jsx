import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c09dqbc_g.css';
import '../../css/m/mzappkblu.css';
import '../../css/v/vivgit4ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c09dqbc_g"/><path class="mzappkblu"/><path class="vivgit4ai"/></g>`,
		"fallback": "hugeicons:bookmark-off-01",
	});
}

export default Component;
