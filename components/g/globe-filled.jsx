import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dwkz87bar.css';
import '../../css/a/a8i80jb2p.css';
import '../../css/m/mf_dhvsrk.css';
import '../../css/f/fnjfdobhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dwkz87bar"/><path class="a8i80jb2p"/><path class="mf_dhvsrk"/><path class="fnjfdobhd"/></g>`,
		"fallback": "tabler:globe-filled",
	});
}

export default Component;
