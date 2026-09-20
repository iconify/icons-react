import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/occ_9ethj.css';
import '../../css/i/iw2ii3p6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="occ_9ethj"/><path class="iw2ii3p6f"/></g>`,
		"fallback": "reicon:inbox-arrow-down-filled",
	});
}

export default Component;
