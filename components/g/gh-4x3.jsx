import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1_96iyla.css';
import '../../css/j/j7l2cq2fe.css';
import '../../css/y/yt-bzx_hx.css';
import '../../css/s/s22tbkbrz.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1_96iyla"/><path class="j7l2cq2fe"/><path class="yt-bzx_hx"/><path class="s22tbkbrz"/>`,
		"fallback": "flag:gh-4x3",
	});
}

export default Component;
