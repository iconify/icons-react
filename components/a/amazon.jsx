import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-q5d1buo.css';
import '../../css/s/sfge3wiou.css';
import '../../css/y/y4c22ebjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-q5d1buo"/><path clip-rule="evenodd" class="sfge3wiou"/><path class="y4c22ebjx"/></g>`,
		"fallback": "proicons:amazon",
	});
}

export default Component;
