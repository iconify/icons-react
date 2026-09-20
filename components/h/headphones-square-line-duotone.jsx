import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xeqfbqmug.css';
import '../../css/e/e_8kd3buu.css';
import '../../css/p/pbhj346_p.css';
import '../../css/g/gss1pq6sj.css';
import '../../css/x/x4tkz9bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xeqfbqmug"/><path class="e_8kd3buu"/><path class="pbhj346_p"/><path class="gss1pq6sj"/><path class="x4tkz9bbr"/></g>`,
		"fallback": "solar:headphones-square-line-duotone",
	});
}

export default Component;
