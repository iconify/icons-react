import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vyosh6ymd.css';
import '../../css/j/j-nd_bb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vyosh6ymd"/><path class="j-nd_bb4w"/></g>`,
		"fallback": "coolicons:git-branch-duotone-round",
	});
}

export default Component;
