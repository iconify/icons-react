import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvfezxv-j.css';
import '../../css/i/if583s18u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rvfezxv-j"/><path class="if583s18u"/></g>`,
		"fallback": "reicon:bookmark-square2-filled",
	});
}

export default Component;
