import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r-do9_buf.css';
import '../../css/j/jj-1tvbjg.css';
import '../../css/u/uzjqjlk8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r-do9_buf"/><path class="jj-1tvbjg"/><path class="uzjqjlk8c"/></g>`,
		"fallback": "solar:feed-linear",
	});
}

export default Component;
