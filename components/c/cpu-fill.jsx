import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yevc20bjn.css';
import '../../css/r/rr86zzpxg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yevc20bjn"/><path class="rr86zzpxg"/></g>`,
		"fallback": "bi:cpu-fill",
	});
}

export default Component;
