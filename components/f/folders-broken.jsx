import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/erx52p64j.css';
import '../../css/h/hg-ty3b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="erx52p64j"/><path class="hg-ty3b3x"/></g>`,
		"fallback": "solar:folders-broken",
	});
}

export default Component;
