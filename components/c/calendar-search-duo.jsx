import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zx1akcbmk.css';
import '../../css/a/a_eltob-q.css';
import '../../css/i/i9cg2rj9b.css';
import '../../css/y/ykqnlnbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zx1akcbmk"/><path class="a_eltob-q wm-s"/><path class="i9cg2rj9b"/><path class="wm-a ykqnlnbbe"/></g>`,
		"fallback": "withicons:calendar-search-duo",
	});
}

export default Component;
