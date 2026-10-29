import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hgn-75b4t.css';
import '../../css/z/zl0fbyblg.css';
import '../../css/h/h900o1u8p.css';
import '../../css/k/k32ibobjl.css';
import '../../css/f/f545reb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hgn-75b4t wm-deco"/><path class="wm-deco zl0fbyblg"/><path class="h900o1u8p wm-deco"/><path class="k32ibobjl wm-k"/><path class="f545reb7b wm-a"/></g>`,
		"fallback": "withicons:baguette-blueprint",
	});
}

export default Component;
