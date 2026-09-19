import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/u/u2l1heb5w.css';
import '../../css/i/izyfzxbzi.css';
import '../../css/b/b1702k4lx.css';
import '../../css/s/s7cgk2_wh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="u2l1heb5w"/><path class="izyfzxbzi"/><path class="b1702k4lx"/><path class="s7cgk2_wh"/></g>`,
		"fallback": "fluent-emoji-flat:face-vomiting",
	});
}

export default Component;
