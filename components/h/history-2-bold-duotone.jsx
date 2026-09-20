import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mvhj0s08x.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/fnwyp6her.css';
import '../../css/k/ko8_sebfn.css';
import '../../css/e/ef1sgg4fe.css';
import '../../css/s/szch40bqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mvhj0s08x"/><g class="mc2zb0bvp"><path class="fnwyp6her"/><path class="ko8_sebfn"/><path class="ef1sgg4fe"/><path class="szch40bqj"/></g></g>`,
		"fallback": "solar:history-2-bold-duotone",
	});
}

export default Component;
