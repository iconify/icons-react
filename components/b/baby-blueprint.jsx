import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n9wsv9sig.css';
import '../../css/t/t50efyb0p.css';
import '../../css/k/kxw1r_9qm.css';
import '../../css/t/tnrueneju.css';
import '../../css/e/emma5uf1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="n9wsv9sig wm-deco"/><path class="t50efyb0p wm-deco"/><path class="kxw1r_9qm wm-deco"/><path class="tnrueneju wm-k"/><path class="emma5uf1l wm-a"/></g>`,
		"fallback": "withicons:baby-blueprint",
	});
}

export default Component;
