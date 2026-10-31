import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jp3i_tqcc.css';
import '../../css/a/a5y1zm6in.css';
import '../../css/l/l4-zqcb2t.css';
import '../../css/f/fm88cmo8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jp3i_tqcc wm-shadow"/><path class="a5y1zm6in wm-shadow"/><path class="l4-zqcb2t"/><path class="fm88cmo8g"/></g>`,
		"fallback": "withicons-brutal:arrow-big-up",
	});
}

export default Component;
