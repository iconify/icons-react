import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/unhy7-bno.css';
import '../../css/h/hyqrsxcym.css';
import '../../css/n/nge5cfbll.css';
import '../../css/t/tyaz4rq9w.css';
import '../../css/x/xscq2rb7l.css';
import '../../css/p/pth9bvbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="unhy7-bno wm-deco"/><path class="hyqrsxcym wm-deco"/><path class="nge5cfbll wm-deco"/><path class="tyaz4rq9w wm-k"/><path class="wm-a xscq2rb7l"/><path class="pth9bvbqd wm-k"/></g>`,
		"fallback": "withicons:book-open-text-blueprint",
	});
}

export default Component;
