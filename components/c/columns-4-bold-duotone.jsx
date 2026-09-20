import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whz6uu_tj.css';
import '../../css/y/ym14rv7er.css';
import '../../css/c/c85p-xbpf.css';
import '../../css/y/yt2hbj67m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="whz6uu_tj"/><path class="ym14rv7er"/><path class="c85p-xbpf"/><path class="yt2hbj67m"/></g>`,
		"fallback": "solar:columns-4-bold-duotone",
	});
}

export default Component;
