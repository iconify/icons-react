import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xquqyfblz.css';
import '../../css/w/w9t98ac2y.css';
import '../../css/x/xk1bogqxz.css';
import '../../css/b/bwni0_j2d.css';
import '../../css/d/d1up9g-eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xquqyfblz"/><path class="w9t98ac2y wm-a"/><path class="wm-shadow xk1bogqxz"/><path class="bwni0_j2d wm-k"/><path class="d1up9g-eu wm-a"/></g>`,
		"fallback": "withicons:hammer-engrave",
	});
}

export default Component;
