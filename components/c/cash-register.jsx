import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/ylb-gcc9n.css';
import '../../css/r/rm1zh_58l.css';
import '../../css/b/be1ww84fg.css';
import '../../css/g/ghy1agb1b.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ylb-gcc9n"/><path class="rm1zh_58l wm-shine"/><path class="be1ww84fg wm-k"/><path class="ghy1agb1b wm-a"/><path class="jgtis7b9v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:cash-register",
	});
}

export default Component;
