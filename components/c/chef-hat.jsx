import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bd8d48beu.css';
import '../../css/a/ace6b3l6l.css';
import '../../css/n/nr55p4bys.css';
import '../../css/c/crig_rjsw.css';
import '../../css/l/lvdq6kbft.css';
import '../../css/x/xaa0grb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bd8d48beu wm-k"/><path class="ace6b3l6l wm-deco"/><path class="nr55p4bys wm-k"/><path class="crig_rjsw wm-shadow"/><path class="lvdq6kbft wm-shine"/><path class="wm-shine xaa0grb2n"/></g>`,
		"fallback": "withicons-valentine:chef-hat",
	});
}

export default Component;
