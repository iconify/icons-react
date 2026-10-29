import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/at5as1b_r.css';
import '../../css/p/pn7x-2bnj.css';
import '../../css/e/enkc8mbld.css';
import '../../css/k/k9zy2hadm.css';
import '../../css/b/b3fmwac5l.css';
import '../../css/v/vildi5bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="at5as1b_r wm-deco"/><path class="pn7x-2bnj wm-deco"/><path class="enkc8mbld wm-deco"/><path class="k9zy2hadm wm-k"/><path class="b3fmwac5l wm-a"/><path class="vildi5bvg wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-blueprint",
	});
}

export default Component;
