import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mqa-_wbaf.css';
import '../../css/k/kj_qmbbtw.css';
import '../../css/r/rzv24ii1n.css';
import '../../css/p/p5os4ng7w.css';
import '../../css/t/tq812si9s.css';
import '../../css/n/n9ntmhbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mqa-_wbaf"/><path class="kj_qmbbtw wm-a"/><path class="rzv24ii1n wm-s"/><path class="p5os4ng7w wm-k"/><path class="tq812si9s wm-a"/><path class="n9ntmhbfy wm-s"/></g>`,
		"fallback": "withicons:bell-minus-sketch",
	});
}

export default Component;
