import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b9l86ghgr.css';
import '../../css/s/swbe_ab5l.css';
import '../../css/g/gqs7xpbhd.css';
import '../../css/e/evayibbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b9l86ghgr"/><path class="swbe_ab5l wm-a"/><path class="gqs7xpbhd wm-k"/><path class="evayibbik wm-a"/></g>`,
		"fallback": "withicons:avatar-bear-sketch",
	});
}

export default Component;
