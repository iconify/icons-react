import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3d5cybou.css';
import '../../css/x/x65a5bbjn.css';
import '../../css/k/k05j9qbba.css';
import '../../css/i/ifhkb4x4u.css';
import '../../css/t/tvck1iikv.css';
import '../../css/g/gnfre_pfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o3d5cybou wm-k"/><path class="wm-deco x65a5bbjn"/><path class="k05j9qbba wm-k"/><path class="ifhkb4x4u wm-k"/><path class="tvck1iikv wm-shadow"/><path class="gnfre_pfc wm-shine"/></g>`,
		"fallback": "withicons-valentine:file-down",
	});
}

export default Component;
