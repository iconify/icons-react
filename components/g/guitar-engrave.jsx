import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oubg7rbmf.css';
import '../../css/n/na0fz3f1u.css';
import '../../css/e/ed5dmbefl.css';
import '../../css/k/knf-w_g_n.css';
import '../../css/c/c96fvtbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="oubg7rbmf wm-k"/><path class="na0fz3f1u wm-a"/><path class="ed5dmbefl wm-shadow"/><path class="knf-w_g_n wm-k"/><path class="c96fvtbfs wm-a"/></g>`,
		"fallback": "withicons:guitar-engrave",
	});
}

export default Component;
