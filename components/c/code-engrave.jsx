import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t_g72-b9s.css';
import '../../css/k/kdi-73b5e.css';
import '../../css/v/vahbrmb-p.css';
import '../../css/i/isb-x7b4z.css';
import '../../css/s/s1afeeb0i.css';
import '../../css/t/t24d_rbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t_g72-b9s wm-k"/><path class="kdi-73b5e wm-a"/><path class="vahbrmb-p wm-shadow"/><path class="isb-x7b4z wm-k"/><path class="s1afeeb0i wm-a"/><path class="t24d_rbut wm-k"/></g>`,
		"fallback": "withicons:code-engrave",
	});
}

export default Component;
