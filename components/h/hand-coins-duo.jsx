import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i_fhoxbnq.css';
import '../../css/z/z-tizms8b.css';
import '../../css/z/z67pmyrnw.css';
import '../../css/i/i-e0xfb7g.css';
import '../../css/j/j_5p8mbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i_fhoxbnq"/><path class="wm-a z-tizms8b"/><path class="wm-a z67pmyrnw"/><path class="i-e0xfb7g"/><path class="j_5p8mbom wm-a"/></g>`,
		"fallback": "withicons:hand-coins-duo",
	});
}

export default Component;
