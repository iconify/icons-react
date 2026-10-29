import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/b_l20ku1e.css';
import '../../css/q/qmauy_88m.css';
import '../../css/z/zee7-nbaw.css';
import '../../css/c/clsq4v3-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="b_l20ku1e wm-deco"/><path class="qmauy_88m wm-deco"/><path class="wm-k zee7-nbaw"/><path class="clsq4v3-l wm-a"/></g>`,
		"fallback": "withicons:bread-blueprint",
	});
}

export default Component;
