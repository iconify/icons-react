import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1v66z1jb.css';
import '../../css/l/lc3pi7z_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q1v66z1jb"/><path clip-rule="evenodd" class="lc3pi7z_d"/></g>`,
		"fallback": "reicon:briefcase-dollar",
	});
}

export default Component;
