import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hhyr8iz-n.css';
import '../../css/c/ch-p73ibm.css';
import '../../css/k/kq0hvab1g.css';
import '../../css/v/vslz5yb3q.css';
import '../../css/i/i1iupn1bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hhyr8iz-n wm-deco"/><path class="ch-p73ibm wm-deco"/><path class="kq0hvab1g wm-k"/><path class="vslz5yb3q wm-a"/><path class="i1iupn1bp wm-k"/></g>`,
		"fallback": "withicons:heading-blueprint",
	});
}

export default Component;
