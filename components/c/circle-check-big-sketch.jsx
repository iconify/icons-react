import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qzf3b8vsm.css';
import '../../css/v/vp63-wbkq.css';
import '../../css/s/se5x8jbpl.css';
import '../../css/v/vgawabc-n.css';
import '../../css/u/uhe1tj0vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qzf3b8vsm"/><path class="vp63-wbkq wm-k"/><path class="se5x8jbpl wm-a"/><path class="vgawabc-n wm-k"/><path class="uhe1tj0vi wm-a"/></g>`,
		"fallback": "withicons:circle-check-big-sketch",
	});
}

export default Component;
